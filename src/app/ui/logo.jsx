import styles from "@/app/ui/logo.module.scss";

export default function Logo({size, type}) {
  return (
    <div className={`${styles.logoContainer} ${styles[size]}`}>
      {type === "complete" &&
      <div className={styles.text}>Mars Happy Nation</div>
}
      {type === "planet-m" &&
      <div className={styles.text}>M</div>
}
      <div className={styles.mars}></div>
    </div>
  )
}
