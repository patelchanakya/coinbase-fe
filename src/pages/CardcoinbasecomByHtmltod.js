import { useCallback } from "react";
import DivscEhSCib from "../components/DivscEhSCib";
import Nav from "../components/Nav";
import FrameComponent from "../components/FrameComponent";
import Section from "../components/Section";
import DivsellingPoint from "../components/DivsellingPoint";
import styles from "./CardcoinbasecomByHtmltod.module.css";
import { useLottie } from 'lottie-react';


const CardcoinbasecomByHtmltod = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://itunes.apple.com/app/id1457614457");
  }, []);

  const onLinkGooglePlayBadge2xpnClick = useCallback(() => {
    window.open("https://play.google.com/store/apps/details");
  }, []);

  const options = {
    path: '/sceneone.json',
    loop: true,
    autoplay: true,
  };


  const style = {
    width: '50%', // Adjust as needed
    height: 'auto', // Adjust as needed
  };


  const { View } = useLottie(options, style);

  return (
    <div className={styles.cardcoinbasecomByHtmltod}>
      <div className={styles.sectionHeading}>
        <div className={styles.after} />
        <DivscEhSCib />
        <Nav />
      </div>
      <main className={styles.divpage}>

        <section className={styles.divpageInner}>
          <FrameComponent />
          <Section />


        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.divfooterInner}>
          <div className={styles.divfooterTrademark}>
            <img
              className={styles.svgIcon4}
              loading="eager"
              alt=""
              src="/svg-7.svg"
            />
            <div className={styles.spanmargin}>
              <div className={styles.span}>
                <div className={styles.coinbase}>© 2019-2024 Coinbase</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CardcoinbasecomByHtmltod;
