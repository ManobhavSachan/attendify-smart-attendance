import Link from 'next/link';
import styles from '../styles.module.css';
import BoardingPagetextImage from '../../Assets/Logo.png';
import Image from 'next/image';
import { FaCameraRetro } from "react-icons/fa";

export default function OnboardingButton() {
  return (
    <div className={styles.homecontainer}>
      <div className={styles.boardimgpos}>
        <Image src={BoardingPagetextImage} width={1024} alt="Boardingpageimage" className={styles.boardingpageimg} />
      </div>


      <div className={styles.onbdtext}>
        <h1 className={styles.cinzel2}>
          {"Picture your presence through ATTENDIFY"}
        </h1>
      </div>

      <div className={styles.startbtnpos}>
        <Link href="/home">
          <button className={styles.getStartedBtn}>
            Get Started <FaCameraRetro className={styles.camicon} />
          </button>
        </Link>
      </div>

      
    </div>
  );
}
