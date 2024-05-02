import styles from '../../styles.module.css';
import Link from 'next/link';
import checkimage from '../../../Assets/checkatt.png';
import Image from 'next/image';
import name from '../../../Assets/namelogo.png'
import { TiArrowBack } from "react-icons/ti";


export default function Register() {
  return (
    <div className={styles.homecontainer}>


     
<div className="navbar bg-primary bg-base-100">
          <div className="navbar-start">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Link href="/teacher">
                  <TiArrowBack />
                </Link>
              </div>
            </button>
          </div>

          <div className="navbar-center">
            <Image className={styles.navimgpos} src={name} width={120} />
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
                <li><Link href="/home" >Home</Link></li>
                <li><Link href="/onboarding" >Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>


      {/* <div>
      <h1 className={styles.hometext}>Check Attendance</h1>
      </div> */}



      <div className={styles.reg}>

        <div className={styles.teabtpos}>
          <label className={styles.formele} htmlFor="Name" >Name: </label>
          <div>
            <input type="text" id="Name" name="name" required className={styles.inputbox} />
          </div>

        </div>


        <div >

          <div className={styles.teabtpos}>
            <label className={styles.formele} htmlFor="Roll No" >Student Roll Number: </label>
            <div>
              <input type="text" id="Roll No" name="name" required className={styles.inputbox} />
            </div>
          </div>

          <div className={styles.teabtpos}>
            <label className={styles.formele} htmlFor="Studentpic" >Student Photo: </label>
            <div>
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>
          </div>
        </div>



        <div className={styles.teabtpos}>
          <button type="submit" className={styles.subBtn}>Submit</button>
        </div>


      </div>





      {/* <div className={styles.teabtpos}>

        <Link href="\teacher" className={styles.backbtn2}>
          Back
        </Link>

      </div> */}

      <div>

        <Image src={checkimage} width={1024} alt="checkpageimage" className={styles.checkimgpos} />

      </div>


    </div>
  );
}

