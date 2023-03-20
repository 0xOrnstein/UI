import React, { useRef } from "react";
import BtnEnterApp from "../../ui/BtnEnterApp";
import classes from "./home.module.css";
import {useRouter} from "next/router";

const socialLinks = {
  twitter: "https://twitter.com/NetworkLiquify",
  discord: "https://discord.gg/3S436bvRdW",
  telegram: "https://t.me/LiquifyNetwork",
  gitbook: "https://docs.liquify.network/",
  medium: "https://medium.com/@liquifynetwork",
};

const HomePage = () => {
  const router = useRouter();
  const layoutRef = useRef(null);
  const pageRef = useRef(null);

  return (
    <div className={classes.wrapper}>
      <div className={classes.row}>
        <div className={classes.column}>
          <p className={classes.title}>Low fees ve(3,3) DEX</p>
          <p className={classes.subtitle}>
            Liquify offers users quick, seamless and cheap transactions while
            utilizing strategies to maximize their yield.
          </p>
          <div
            className={classes.buttonEnter}
            onClick={() => router.push("/swap")}
          >
            <BtnEnterApp
              labelClassName={classes.buttonEnterLabel}
              label={"Launch app"}
            />
          </div>
        </div>
        <div className={classes.column}>
          <p className={classes.title2}>0.01% Swapping Fee</p>
          <p className={classes.title2}>Tokenized locks as NFTs</p>
          <p className={classes.title2}>CoreDao network</p>

          <div className={classes.layoutPromoSocials}>
            <div className={classes.layoutPromoSocialsLink}>
              <a href={socialLinks.telegram} target="_blank">
              <img src="/images/telegram.png" width={48} height={48}/>
              </a>
            </div>
            <div className={classes.layoutPromoSocialsLink}>
              <a href={socialLinks.twitter} target="_blank">
              <img src="/images/twitter.png" width={48} height={48} />
              </a>
              </div>
            <div className={classes.layoutPromoSocialsLink}>
              <a href={socialLinks.medium} target="_blank">
              <img src="/images/medium.png" width={48} height={48} />
              </a>
            </div>
            <div className={classes.layoutPromoSocialsLink}>
              <a href={socialLinks.discord} target="_blank">
              <img src="/images/discord.png" width={48} height={48} />
              </a>
            </div>
            {/*<div className={classes.layoutPromoSocialsLink}>*/}
            {/*  <a href={socialLinks.telegram} target="_blank">*/}
            {/*    <svg*/}
            {/*      style={{ marginLeft: -2 }}*/}
            {/*      width="20"*/}
            {/*      height="20"*/}
            {/*      viewBox="0 0 20 20"*/}
            {/*      fill="none"*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*    >*/}
            {/*      <path*/}
            {/*        fillRule="evenodd"*/}
            {/*        clipRule="evenodd"*/}
            {/*        d="M1.6975 9.41086C6.8654 7.15929 10.3115 5.67491 12.0357 4.95774C16.9588 2.91006 17.9818 2.55435 18.6486 2.54261C18.7952 2.54002 19.1231 2.57637 19.3355 2.74871C19.5148 2.89423 19.5642 3.09082 19.5878 3.22879C19.6114 3.36676 19.6408 3.68107 19.6174 3.92666C19.3507 6.72978 18.1963 13.5322 17.609 16.6718C17.3605 18.0002 16.8712 18.4456 16.3975 18.4892C15.368 18.584 14.5863 17.8089 13.5892 17.1553C12.029 16.1325 11.1475 15.4959 9.63306 14.4978C7.88281 13.3444 9.01742 12.7105 10.0149 11.6745C10.2759 11.4034 14.8118 7.2777 14.8996 6.90343C14.9105 6.85662 14.9207 6.68215 14.8171 6.59001C14.7134 6.49788 14.5604 6.52939 14.45 6.55445C14.2936 6.58996 11.801 8.23742 6.97251 11.4968C6.26502 11.9826 5.6242 12.2193 5.05004 12.2069C4.41708 12.1933 3.19952 11.849 2.29439 11.5548C1.1842 11.1939 0.301855 11.0031 0.378687 10.3903C0.418707 10.071 0.85831 9.74457 1.6975 9.41086Z"*/}
            {/*        fill="#779BF4"*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*  </a>*/}
            {/*</div>*/}
            
          </div>
        </div>
      </div>
      <div className={classes.divider} />
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.text}>
            <p>Permissionless liquidity market, community oriented ve(3,3) on CoreDAO. <br/> Click below to learn more about Liquify 👇 </p>
          </div>
        </div>
      </div>
      <a href="https://docs.liquify.network/" className={classes.infoButton}>
        <span>LEARN MORE</span>
        <img src="/images/ui/explorer.svg" />
      </a>
    </div>
  );

  // return (
  //     <div
  //         className={classes.homePage}
  //         ref={pageRef}
  //         onScroll={() => { console.log('--', pageRef.current.scrollTop) }}
  //     >
  //         <div className={classes.container}>
  //             <div className={classes.layoutPromo}>
  //                 <div className={classes.layoutPromoTitle}>
  //                     Enter the era of crypto
  //                 </div>
  //                 <div className={classes.layoutPromoSubTitle}>
  //                     Liquify
  //                 </div>
  //                 <div className={classes.layoutPromoDescription}>
  //                     <div className={classes.layoutPromoDescriptionItem}>
  //                         0.05% FEE
  //                     </div>
  //                     <div className={classes.layoutPromoDescriptionItem}>
  //                         TOKENIZED LOCKS AS NFT’s
  //                     </div>
  //                     <div className={classes.layoutPromoDescriptionItem}>
  //                         POLYGON (MATIC)
  //                     </div>
  //                 </div>
  //                 <div className={classes.layoutPromoButton}>
  //                     <div className={classes.buttonEnter} onClick={() => router.push('/swap')}>
  //                         <BtnEnterApp labelClassName={classes.buttonEnterLabel} label={'Enter App'} />
  //                     </div>
  //                 </div>
  //             </div>
  //             <div className={classes.layoutDescription} ref={layoutRef}>
  //                 <div className={classes.layoutDescriptionText}>
  //                     <p>Liquify officially launched in April 2022 with a collective goal of <b>fair and balanced access to DeFi</b>.</p>
  //                     <p>Liquify is a decentralized exchange that has launched on the Polygon network with low fees, near 0 slippage on correlated assets and a strong focus on secondary markets for tokenized locks as NFT’s (veToken = lpNFTs).</p>
  //                 </div>
  //                 <div className={classes.layoutDescriptionSmallText}>
  //                     <p>One segment of the cryptocurrency landscape that has shown incredible potential is the swapping of stablecoins and volatile assets. Liquify Swap offers users quick, seamless and cheap transactions while utilizing strategies to maximize their yield.</p>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // )
};

export default HomePage;
