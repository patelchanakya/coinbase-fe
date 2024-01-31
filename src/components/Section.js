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
          Introducing Chanakya Patel
        </h2>
        <div className={styles.aVisaDebitContainer}>
          <span>
            <p className={styles.aVisaDebit}>
              Eager Full-Stack Engineer.
            </p>
            <p className={styles.theEasiestQuickest}>
              Aiming to innovate at Coinbase's card division with user-centric design.
            </p>
          </span>
        </div>

      </div>

      <a href="https://github.com/patelchanakya/coinbase-fe" target="_blank" rel="noopener noreferrer">
        <img src="/res.png" alt="chanakya patel resume" />
      </a>
    </div>
  );
};

export default Section;
