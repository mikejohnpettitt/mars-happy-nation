import styles from "@/app/ui/skill-tag.module.scss";

export default function SkillTag({label, category}) {
  return (
    <div className={`${styles[category]} ${styles.skillTag}`}>{label}</div>
  )
}
