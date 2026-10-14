import TextBox from "@/app/ui/text-box";
import Navbar from "@/app/ui/navbar";
import Logo from "@/app/ui/logo";
import SkillTag from "@/app/ui/skill-tag";
import styles from "@/app/ui/text-layout.module.scss";
import skillTagStyles from "@/app/ui/skill-tag.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <TextBox>
        <div className={`${styles.columns}`}>
          <div>
            <h3 className="d-flex">
              <Logo size="tiny" type="planet-only" />
              Mike Pettitt
            </h3>
            <div>
              <p>
                I am a freelance web developer and designer working primarily in the world of education and technology. After 13 years working in learning and development in a number of very varied roles, I decided to train up properly in web development and have a go at working with multiple clients, while also working on my own projects.
              </p>
              <p>
                I am British originally but have been living in France for 8 years, and I have clients all over the world.
              </p>
            </div>
          </div>
          <div className={styles.profilePictureContainer}>
            <Image className={styles.profilePicture} src="/images/mike.jpg" alt="picture of Mike" width="2051" height="2730"/>
            <div className={styles.logoOverlay}>
              <Logo size="small" type="planet-m"></Logo>
            </div>
          </div>
        </div>

        <div>
          <div className={skillTagStyles.skillTagContainer}>
            <SkillTag category={"code"} label={"React"}></SkillTag>
            <SkillTag category={"code"} label={"Next.js"}></SkillTag>
            <SkillTag category={"code"} label={"Prisma"}></SkillTag>
            <SkillTag category={"code"} label={"CSS"}></SkillTag>
            <SkillTag category={"code"} label={"Typescript"}></SkillTag>
          </div>
          <div className={skillTagStyles.skillTagContainer}>
            <SkillTag category={"technical"} label={"Learning design"}></SkillTag>
            <SkillTag category={"technical"} label={"Video production"}></SkillTag>
            <SkillTag category={"technical"} label={"Branding"}></SkillTag>
            <SkillTag category={"technical"} label={"Graphic design"}></SkillTag>
          </div>
          <div className={skillTagStyles.skillTagContainer}>
            <SkillTag category={"software"} label={"Adobe Illustrator"}></SkillTag>
            <SkillTag category={"software"} label={"Adobe Photoshop"}></SkillTag>
            <SkillTag category={"software"} label={"Adobe After Effects"}></SkillTag>
            <SkillTag category={"software"} label={"Adobe Premiere Pro"}></SkillTag>
            <SkillTag category={"software"} label={"Adobe Captivate"}></SkillTag>
            <SkillTag category={"software"} label={"Articulate Rise/Storyline"}></SkillTag>
            <SkillTag category={"software"} label={"Blender"}></SkillTag>
          </div>
          <div className={skillTagStyles.skillTagContainer}>
            <SkillTag category={"language"} label={"English - native"}></SkillTag>
            <SkillTag category={"language"} label={"French - Fluent (DALF C1)"}></SkillTag>
            <SkillTag category={"language"} label={"Spanish - Intermediate (DELE B1)"}></SkillTag>
            <SkillTag category={"language"} label={"Mandarin Chinese - Beginner (HSK3)"}></SkillTag>
          </div>
        </div>
      </TextBox>
    </div>
  );
}
