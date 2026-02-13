import { useUploadContext } from '@/context/upload.context';
import { MouseEvent } from 'react';
import * as S from './preview.style';

export const Preview = () => {
  const {
    get: { stateScreens, stateImages },
  } = useUploadContext();
  const date = new Date().toISOString();

  const handleClickDownload = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!stateImages.aside || !stateImages.center) {
      e.preventDefault();
    }
  };

  return (
    <S.Wrapper>
      <S.ScreenDownload>
        <S.ScreenDownloadButton
          href={stateImages.aside}
          download={stateImages.aside ? `Split-${stateScreens.aside.label}-${date}.png` : ''}
          onClick={handleClickDownload}
        >
          Download lateral
        </S.ScreenDownloadButton>
        <S.ScreenDownloadButton
          href={stateImages.center}
          download={stateImages.aside ? `Split-${stateScreens.center.label}-${date}.png` : ''}
          onClick={handleClickDownload}
        >
          Download central
        </S.ScreenDownloadButton>
      </S.ScreenDownload>
      <S.Screens>
        <S.ScreensContent
          ratio={8 / 9}
          width="25%"
          style={{ backgroundImage: `url(${stateImages.aside})`, backgroundPositionX: '0%' }}
        >
          <S.ScreenTitle>{stateScreens.aside.label} (Esquerda)</S.ScreenTitle>
          <S.ScreenSize>
            {stateScreens.aside.width / 2} x {stateScreens.aside.height}
          </S.ScreenSize>
        </S.ScreensContent>
        <S.ScreensContent
          ratio={16 / 9}
          width="50%"
          style={{ backgroundImage: `url(${stateImages.center})`, backgroundPositionX: '0%' }}
        >
          <S.ScreenTitle>{stateScreens.center.label}</S.ScreenTitle>
          <S.ScreenSize>
            {stateScreens.center.width} x {stateScreens.center.height}
          </S.ScreenSize>
        </S.ScreensContent>
        <S.ScreensContent
          ratio={8 / 9}
          width="25%"
          style={{ backgroundImage: `url(${stateImages.aside})`, backgroundPositionX: '-100%' }}
        >
          <S.ScreenTitle>{stateScreens.aside.label} (Direita)</S.ScreenTitle>
          <S.ScreenSize>
            {stateScreens.aside.width / 2} x {stateScreens.aside.height}
          </S.ScreenSize>
        </S.ScreensContent>
      </S.Screens>
    </S.Wrapper>
  );
};
