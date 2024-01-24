import { useCallback } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://itunes.apple.com/app/id1457614457");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://play.google.com/store/apps/details");
  }, []);

  return (
    <div className={styles.divheroBodyParent}>
      <div className={styles.divheroBody}>
        <div className={styles.heading1}>
          <h1 className={styles.coinbaseCardSpendContainer}>
            <span>
              <p className={styles.coinbaseCard}>
                <b>Coinbase Card</b>
              </p>
              <p className={styles.spendCryptoAnywhere}>
                Spend crypto anywhere
              </p>
            </span>
          </h1>
        </div>
        <div className={styles.p}>
          <div className={styles.downloadTheApp}>
            Download the app to get started.
          </div>
        </div>
        <div className={styles.divappStoreLinks}>
          <div className={styles.link} onClick={onLinkContainerClick}>
            <div className={styles.appLinkApplesvg}>
              <div className={styles.appLinkApplesvgFill}>
                <img
                  className={styles.appLinkApplesvgIcon}
                  loading="eager"
                  alt=""
                  src="/applinkapplesvg@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.linkmargin}>
            <div className={styles.link1} onClick={onLinkContainer2Click}>
              <img
                className={styles.googlePlayBadge2xpngIcon}
                alt=""
                src="/googleplaybadge2xpng@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divshape} />
      <div className={styles.sVGHeading}>
        <div className={styles.divshape1}>
          <div className={styles.after} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
