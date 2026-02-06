'use client';

import ImageNext from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const imageCenterRef = useRef<HTMLImageElement>(null);
  const imageAsideRef = useRef<HTMLImageElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [stateNameFile, setStateNameFile] = useState('');

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;

    if (currentTarget && currentTarget.files) {
      const [file] = currentTarget.files;
      setStateNameFile(file.name);
      const img = new Image();

      img.addEventListener('load', () => {
        const slicesAside = { width: 1366, height: 768, type: 'ASIDE' } as const;
        const slicesCenter = { width: 1920, height: 1080, type: 'CENTER' } as const;
        const slicesAxis = [slicesAside, slicesCenter];

        slicesAxis.forEach((item) => {
          const canvas = document.createElement('canvas');
          canvas.width = item.width;
          canvas.height = item.height;

          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          if (item.type === 'ASIDE' && imageAsideRef.current) {
            const { height: heightCenter, width: widthCenter } = slicesCenter;
            const { height, width } = slicesAside;
            const sy = (heightCenter - height) / 2;
            const halfWidth = width / 2;
            const rightWidth = widthCenter + halfWidth;
            ctx.drawImage(img, 0, sy, width, heightCenter, 0, 0, width, heightCenter);
            ctx.drawImage(img, rightWidth, sy, halfWidth, heightCenter, halfWidth, 0, halfWidth, heightCenter);
            imageAsideRef.current.src = canvas.toDataURL('image/png');
          }
          if (item.type === 'CENTER' && imageCenterRef.current) {
            const { width: widthAside } = slicesAside;
            const { height, width } = slicesCenter;
            ctx.drawImage(img, widthAside / 2, 0, width, height, 0, 0, width, height);
            imageCenterRef.current.src = canvas.toDataURL('image/png');
          }
        });

        if (resultRef.current) {
          resultRef.current.style.opacity = '1';
        }
      });
      img.src = URL.createObjectURL(file);
    }
  };

  return (
    <div className={styles.page}>
      <a className={styles.samplePSD} href="./sample-psd.psd">
        PSD Exemplo
      </a>
      <div className={styles.title}>Backstage Split Screen</div>
      <div className={styles.dragdrop}>
        <input type="file" id="upload" onChange={handleUploadImage} />
        <div className={styles.dragdropWrapper}>
          <div className={styles.dragdropThumb}>
            <ImageNext src="thumb-image.svg" alt="" width={120} height={120} loading="eager" />
          </div>
          <div className={styles.dragdropContent}>
            <p className={styles.dragdropTitle}>Faça o upload da sua imagem</p>
            <p className={styles.dragdropPhrase}>Clique ou arraste a sua imagem aqui</p>
            <p className={styles.dragdropFile}>{stateNameFile}</p>
          </div>
        </div>
        <button className={styles.dragdropButton}>Procurar</button>
      </div>
      <div className={styles.result} ref={resultRef}>
        <div className={styles.resultBox}>
          <div className={styles.resultTitle}>Central</div>
          <div className={styles.resultThumb}>
            <ImageNext src="thumb-image.svg" alt="" width={120} height={120} ref={imageCenterRef} loading="eager" />
          </div>
        </div>
        <div className={styles.resultBox}>
          <div className={styles.resultTitle}>Lateral</div>
          <div className={styles.resultThumb}>
            <ImageNext src="thumb-image.svg" alt="" width={120} height={120} ref={imageAsideRef} loading="eager" />
          </div>
        </div>
      </div>
    </div>
  );
}
