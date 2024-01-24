import styles from "./Section.module.css";

const Section = () => {
  return (
    <div className={styles.section}>
      <div className={styles.divcardMockupImageWrapper}>
        <div className={styles.cardMockup2xpngParent}>
          <img
            className={styles.cardMockup2xpngIcon}
            alt=""
            src="/cardmockup2xpng@2x.png"
          />
          <img
            className={styles.cardMirror2xpngIcon}
            loading="eager"
            alt=""
            src="/cardmirror2xpng@2x.png"
          />
        </div>
        <img className={styles.svgIcon} loading="eager" alt="" src="/svg.svg" />
        <div className={styles.divshape} />
      </div>
      <div className={styles.frameSignUpForm}>
        <h2 className={styles.introducingCoinbaseCard}>
          Introducing Coinbase Card
        </h2>
        <div className={styles.aVisaDebitContainer}>
          <span>
            <p className={styles.aVisaDebit}>
              A Visa debit card, funded by your Coinbase balance.
            </p>
            <p className={styles.theEasiestQuickest}>
              The easiest, quickest way to spend your crypto worldwide.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section;
