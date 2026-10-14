import styles from "@/app/ui/navbar.module.scss";
import Logo from "@/app/ui/logo";

export default function Navbar() {
  return (
    <div className={`${styles.navbarContainer}`}>
        <Logo size={"medium"} type={"complete"}/>
    </div>
  );
}
