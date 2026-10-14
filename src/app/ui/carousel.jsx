import Image from "next/image"
import styles from "@/app/ui/carousel.module.scss";

//accepts and array of objects with url and description for each
export default function Carousel({images}) {
    return(
    <div className={styles.carouselContainer}>
        <div className={styles.imageContainer}>

        {
            images.map((image, index) => 
                <Image key={`image-${index}`} src={image.url} alt={image.description} width={366} height={366}></Image>
            )    
        }
        </div>
    </div>
)
}