import styles from "@/app/ui/navbar.module.scss";
import Logo from "@/app/ui/logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={`${styles.navbarContainer}`}>
      <Link href="/">
        <Logo size={"medium"} type={"complete"}/>
      </Link>
    </div>
  );
}
