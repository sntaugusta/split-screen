import { ScreensKeys, ScreensProps, useUploadContext } from '@/context/upload.context';
import { ChangeEvent, useState } from 'react';
import * as S from './aside.style';

interface IHandleChangeSize {
  event: ChangeEvent<HTMLInputElement>;
  attr: keyof ScreensProps[keyof ScreensProps];
  key: keyof ScreensProps;
}

export const Aside = () => {
  const {
    get: { stateScreens },
    set: { setStateScreens, setStateImages },
  } = useUploadContext();
  const [stateFilePath, setStateFilePath] = useState('');

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    if (currentTarget && currentTarget.files) {
      const [file] = currentTarget.files;
      const img = new Image();
      img.addEventListener('load', () => {
        const screensList = Object.entries(stateScreens);
        screensList.forEach(([key, value]) => {
          const canvas = document.createElement('canvas');
          const others = screensList.find(([otherKey]) => otherKey !== key);
          if (others) {
            const [, othersItem] = others;
            const { width: otherWidth, height: otherHeight } = othersItem;
            canvas.width = value.width;
            canvas.height = value.height;
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
            setStateImages((prevState) => {
              const { height, width } = value;
              const sy = (otherHeight - height) / 2;
              const halfWidth = width / 2;
              const rightWidth = otherWidth + halfWidth;
              if (key === 'center') {
                ctx.drawImage(img, otherWidth / 2, 0, width, height, 0, 0, width, height);
              } else {
                ctx.drawImage(img, 0, sy, width, otherHeight, 0, 0, width, otherHeight);
                ctx.drawImage(img, rightWidth, sy, halfWidth, otherHeight, halfWidth, 0, halfWidth, otherHeight);
              }
              const src = canvas.toDataURL('image/png');
              return { ...prevState, [key as ScreensKeys]: src };
            });
          }
        });
      });
      const blob = URL.createObjectURL(file);
      img.src = blob;
      setStateFilePath(blob);
    }
  };

  const handleChangeSize = ({ event, attr, key }: IHandleChangeSize) => {
    const {
      currentTarget: { value },
    } = event;
    setStateScreens((prevState) => {
      const width = attr === 'width' ? Number(value) : Math.floor(Number(value) * (16 / 9));
      const height = attr === 'width' ? Math.floor(Number(value) * (9 / 16)) : Number(value);
      return {
        ...prevState,
        [key]: { ...prevState[key], width, height },
      };
    });
  };

  return (
    <S.Wrapper>
      <S.Subtitle>Backstage Augusta</S.Subtitle>
      <S.Title>Backstage Split Screen</S.Title>
      <S.File style={{ backgroundImage: `url(${stateFilePath})` }}>
        <S.FileIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H12M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 21L17.5 15M17.5 15L20 17.5M17.5 15L15 17.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </S.FileIcon>
        <S.Filename>Upload de imagem</S.Filename>
        <input type="file" name="" id="" accept="image/jpeg, image/png" onChange={handleChangeFile} />
      </S.File>
      {Object.entries(stateScreens).map(([key, value]) => (
        <S.Category key={key}>
          <S.CategoryName>{value.label}</S.CategoryName>
          <table cellPadding={0} cellSpacing={4}>
            <tbody>
              <tr>
                <th>
                  <S.CategoryLabel htmlFor={`${key}-width`}>Largura</S.CategoryLabel>
                </th>
                <td width="100%">
                  <S.CategoryInputWrapper>
                    <S.CategoryInput
                      type="number"
                      value={value.width}
                      id={`${key}-width`}
                      onChange={(e) => handleChangeSize({ event: e, attr: 'width', key: key as ScreensKeys })}
                    />
                    <span>px</span>
                  </S.CategoryInputWrapper>
                </td>
              </tr>
              <tr>
                <th>
                  <S.CategoryLabel htmlFor={`${key}-height`}>Altura</S.CategoryLabel>
                </th>
                <td>
                  <S.CategoryInputWrapper>
                    <S.CategoryInput
                      type="number"
                      value={value.height}
                      id={`${key}-height`}
                      onChange={(e) => handleChangeSize({ event: e, attr: 'height', key: key as ScreensKeys })}
                    />
                    <span>px</span>
                  </S.CategoryInputWrapper>
                </td>
              </tr>
            </tbody>
          </table>
        </S.Category>
      ))}
      <S.Tools>
        <S.ToolsIcon href="./sample-psd.psd" data-title="PSD de Exemplo">
          🗎
        </S.ToolsIcon>
      </S.Tools>
    </S.Wrapper>
  );
};
