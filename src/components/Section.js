import styles from "./Section.module.css";
import { useLottie } from 'lottie-react';


const Section = () => {


  const options = {
    path: '/scenerr.json',
    loop: true,
    autoplay: true,
  };


  const style = {
    width: 'auto', // Adjust as needed
    height: 'auto', // Adjust as needed
  };


  const { View } = useLottie(options, style);

  return (
    <div className={styles.section}>
      <div className={styles.divcardMockupImageWrapper}>
        <div className={styles.cardMockup2xpngParent}>
          {/* <img
            className={styles.cardMockup2xpngIcon}
            alt=""
            src="/cardmockup2xpng@2x.png"
          />
          <img
            className={styles.cardMirror2xpngIcon}
            loading="eager"
            alt=""
            src="/cardmirror2xpng@2x.png"
          /> */}
          {View}
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
