'use client';

import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

export type ScreensLabel = 'Central' | 'Lateral';

export type ScreensKeys = 'center' | 'aside';

export type ScreensProps = {
  [key in ScreensKeys]: { label: ScreensLabel; width: number; height: number };
};
export type ImageProps = {
  [key in ScreensKeys]: string;
};

interface IUploadContext {
  get: { stateScreens: ScreensProps; stateImages: ImageProps };
  set: {
    setStateScreens: Dispatch<SetStateAction<ScreensProps>>;
    setStateImages: Dispatch<SetStateAction<ImageProps>>;
  };
}

const screensInit: ScreensProps = {
  center: { label: 'Central', width: 1920, height: 1080 },
  aside: { label: 'Lateral', width: 1366, height: 768 },
};

const imagesInit: ImageProps = {
  center: '',
  aside: '',
};

const UploadContext = createContext<IUploadContext>({
  get: { stateScreens: screensInit, stateImages: imagesInit },
  set: { setStateScreens: () => null, setStateImages: () => null },
});

export const UploadContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [stateScreens, setStateScreens] = useState(screensInit);
  const [stateImages, setStateImages] = useState(imagesInit);
  const values = {
    get: { stateScreens, stateImages },
    set: { setStateScreens, setStateImages },
  };
  return <UploadContext.Provider value={values}>{children}</UploadContext.Provider>;
};

export const useUploadContext = () => useContext(UploadContext);
