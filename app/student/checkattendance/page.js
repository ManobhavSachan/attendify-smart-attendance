import styles from '../../styles.module.css';
import Link from 'next/link';
import checkimage from '../../../Assets/checkatt.png';
import Image from 'next/image';
// import bgimg from '../../../Assets/Background.png'

export default function Register() {
  return (
    <div className={styles.homecontainer}>

      <div>
        <h1 className={styles.hometext}>Check Attendance</h1>
      </div>

      {/* <form className={styles.formbg}>

        <div className={styles.teabtpos}>
          <label className={styles.formele} htmlFor="Roll No." >Student Roll Number: </label>
          <input type="text" id="Roll No" name="name" required className={styles.inputbox} />
        </div>

        <div className={styles.teabtpos}>
          <button type="submit" className={styles.subBtn}>Submit</button>
        </div>

      </form> */}



      <div>

        <Image src={checkimage} width={1024} alt="checkpageimage" className={styles.checkimgpos} />

      </div>

      <div className={styles.teabtpos}>
        <label className={styles.formele} htmlFor="Roll No" >Student Roll Number: </label>
        <input id="Roll No" name="name" type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
        <div className={styles.teabtpos}>
        <button type="submit" className={styles.subBtn}>Submit</button>
        </div>
      </div>


      <div className={styles.teabtpos}>

        <Link href="\student" className={styles.backbtn2}>
          Back
        </Link>

      </div>



    </div>
  );
}

