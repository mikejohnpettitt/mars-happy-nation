import styles from "@/app/ui/text-box.module.scss";

export default function TextBox({ children }) {
  return <div className={`${styles.textBox}`}>{children}</div>;
}
