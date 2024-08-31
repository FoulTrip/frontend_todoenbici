import React from "react";
import styles from "./video.module.css";
import { useRouter } from "next/navigation";
import { TbPointFilled } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { useTranslations } from "next-intl";

const VideoComponent: React.FC = () => {
  const router = useRouter();
  const t = useTranslations("videoComponent");

  return (
    <div className={styles.videoContainer}>
      <div className={styles.infoBannerStreamers}>
        <video
          muted
          className={styles.video}
          autoPlay
          src="/video001.webm"
          playsInline
          loop
        />
      </div>
      <div className={styles.infoBannerStreamers}>
        <div>
          <h3 className={styles.info}>{t("textWarning")}</h3>
          <div className={styles.boxOptiones}>
            <div className={styles.centerOptions}>
              <div
                className={styles.btnStream}
                onClick={() => router.push("/stream")}
              >
                <div className={styles.imageIcon}>
                  <TbPointFilled className={styles.iconCirqelRed} />
                </div>
                <p>{t("titleStreaming")}</p>
              </div>

              <div
                className={styles.btnYoutube}
                onClick={() =>
                  router.push("https://www.youtube.com/@TodoenBicicleta")
                }
              >
                <div className={styles.imageIcon}>
                  <FaYoutube className={styles.iconYoutube} />
                </div>
                <p>{t("titleYoutube")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
