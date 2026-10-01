import styles from "@/app/ui/logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.mars}></div>
      <div className={styles.text}>Mars Happy Nation</div>
    </div>
  )
}
