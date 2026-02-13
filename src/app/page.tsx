'use client';

import { Aside } from '@/components/aside/aside';
import { GlobalsStyle } from '@/components/global-css';
import { Preview } from '@/components/preview';
import * as S from './page.style';

const Home = () => {
  return (
    <S.Page>
      <GlobalsStyle />
      <Aside />
      <Preview />
      {/* <div className={styles.dragdrop}>
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
            <ImageNext src={stateImageCenter.src} alt="" width={120} height={120} loading="eager" />
            <div className={styles.resultButtonWrapper}>
              {stateImageCenter.hasButton ? (
                <a className={styles.resultButton} href={stateImageCenter.src} download>
                  Download centro
                </a>
              ) : (
                <button className={styles.resultButton} disabled>
                  Download centro
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.resultBox}>
          <div className={styles.resultTitle}>Lateral</div>
          <div className={styles.resultThumb}>
            <ImageNext src={stateImageAside.src} alt="" width={120} height={120} loading="eager" />
            <div className={styles.resultButtonWrapper}>
              {stateImageAside.hasButton ? (
                <a className={styles.resultButton} href={stateImageAside.src} download>
                  Download lateral
                </a>
              ) : (
                <button className={styles.resultButton} disabled>
                  Download lateral
                </button>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </S.Page>
  );
};

export default Home;
