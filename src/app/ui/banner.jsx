import styles from "@/app/ui/banner.module.scss";
import Logo from "@/app/ui/logo";
import SkillTag from "@/app/ui/skill-tag";
import Link from "next/link";

export default function Banner() {
    return(
        <div className={styles.bannerContainer}>
            <Logo size="extra-large" type="complete" subtitle={true}></Logo>
            <Link href="/about-me">
                <SkillTag category={"code"} label={"about-me >"}></SkillTag>
            </Link>
        </div>
    )
}