import { useCallback } from "react";
import styles from "./DivscEhSCib.module.css";

const DivscEhSCib = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.coinbase.com/");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://www.coinbase.com/price");
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    window.open("https://www.coinbase.com/learn");
  }, []);

  const onLinkSignClick = useCallback(() => {
    window.open("https://www.coinbase.com/signin");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("https://www.coinbase.com/signup");
  }, []);

  return (
    <div className={styles.divscEhscib}>
      <div className={styles.divscGgmirh}>
        <header className={styles.divscClshhm}>
          <div className={styles.divscIbaprd}>
            <div className={styles.link} onClick={onLinkContainerClick}>
              <div className={styles.consumerWordmarksvg}>
                <div className={styles.consumerWordmarksvgFill}>
                  <img
                    className={styles.consumerWordmarksvgIcon}
                    loading="eager"
                    alt=""
                    src="/consumer-wordmarksvg@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.nav}>
            <div className={styles.link1} onClick={onLinkContainer2Click}>
              <div className={styles.divscGtgzij}>
                <div className={styles.spanscDqppl}>
                  <a
                    className={styles.prices}
                    href="https://www.coinbase.com/price"
                    target="_blank"
                  >
                    Prices
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.link2} onClick={onLinkContainer1Click}>
              <div className={styles.divscGtgzij1}>
                <div className={styles.spanscDqppl1}>
                  <a
                    className={styles.learn}
                    href="https://www.coinbase.com/learn"
                    target="_blank"
                  >
                    Learn
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.divscGtgzijmargin}>
              <div className={styles.divscGtgzij2}>
                <div className={styles.spanscDqppl2}>
                  <div className={styles.individuals}>Individuals</div>
                </div>
              </div>
            </div>
            <div className={styles.divscGtgzijmargin1}>
              <div className={styles.divscGtgzij3}>
                <div className={styles.spanscDqppl3}>
                  <div className={styles.businesses}>Businesses</div>
                </div>
              </div>
            </div>
            <div className={styles.divscGtgzijmargin2}>
              <div className={styles.divscGtgzij4}>
                <div className={styles.spanscDqppl4}>
                  <div className={styles.developers}>Developers</div>
                </div>
              </div>
            </div>
            <div className={styles.divscGtgzijmargin3}>
              <div className={styles.divscGtgzij5}>
                <div className={styles.spanscDqppl5}>
                  <div className={styles.company}>Company</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divscGqfza}>
            <div className={styles.linkmargin}>
              <a
                className={styles.linkSign}
                href="https://www.coinbase.com/signin"
                target="_blank"
                onClick={onLinkSignClick}
              >
                Sign in
              </a>
            </div>
            <div className={styles.link3} onClick={onLinkContainer3Click}>
              <div className={styles.button}>
                <div className={styles.divscIuuytg}>
                  <a
                    className={styles.getStarted}
                    href="https://www.coinbase.com/signup"
                    target="_blank"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DivscEhSCib;
