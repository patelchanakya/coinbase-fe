import styles from "./DivsellingPoint.module.css";

const DivsellingPoint = ({
  sVG,
  useYourCard,
  worldwide,
  readyToUseInMillionsOfLoc,
  theWorldPayWithContactles,
  withdrawCashFromAnyATM,
}) => {
  return (
    <div className={styles.divsellingPoint}>
      <img className={styles.svgIcon} loading="eager" alt="" src={sVG} />
      <div className={styles.spendingSection}>
        <div className={styles.heading3}>
          <h2 className={styles.useYourCardContainer}>
            <span>
              <p className={styles.useYourCard}>{useYourCard}</p>
              <p className={styles.worldwide}>{worldwide}</p>
            </span>
          </h2>
        </div>
        <div className={styles.readyToUseContainer}>
          <span>
            <p className={styles.readyToUse}>{readyToUseInMillionsOfLoc}</p>
            <p className={styles.theWorldPay}>{theWorldPayWithContactles}</p>
            <p className={styles.withdrawCashFrom}>{withdrawCashFromAnyATM}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DivsellingPoint;
