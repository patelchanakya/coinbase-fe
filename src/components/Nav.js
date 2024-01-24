import { useCallback } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://coinbase.com/card");
  }, []);

  const onLinkFAQClick = useCallback(() => {
    window.open(
      "https://help.coinbase.com/en/coinbase/trading-and-funding/coinbase-card/coinbase-card-for-the-us"
    );
  }, []);

  return (
    <div className={styles.nav}>
      <div className={styles.divscBbronj}>
        <div className={styles.cardContainer}>
          <a
            className={styles.card}
            href="https://card.coinbase.com/"
            target="_blank"
          >
            Card
          </a>
        </div>
        <div className={styles.divscCoajtyParent}>
          <div className={styles.divscCoajty}>
            <div className={styles.divscAzgdb}>
              <div className={styles.link} onClick={onLinkContainerClick}>
                <a
                  className={styles.downloadTheApp}
                  href="https://coinbase.com/card"
                  target="_blank"
                >
                  Download the app
                </a>
              </div>
              <div className={styles.linkmargin}>
                <a
                  className={styles.linkFaq}
                  href="https://help.coinbase.com/en/coinbase/trading-and-funding/coinbase-card/coinbase-card-for-the-us"
                  target="_blank"
                  onClick={onLinkFAQClick}
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>
          <div className={styles.divscKhakjo} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
