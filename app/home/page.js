// pages/index.js

import Link from 'next/link';
import styles from '../styles.module.css';
import Homeimage from '..//../Assets/Home Page.png';
import Image from 'next/image';
import name from '../../Assets/namelogo.png'
import { TiArrowBack } from "react-icons/ti";


const HomePage = () => {
  return (
    <div className={styles.homecontainer}>


      <div>


        <div className="navbar bg-primary bg-base-100">
          <div className="navbar-start">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Link href="/onboarding">
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
                <li><Link href="onboarding" >Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* <div className={styles.welcome}>

        <h1 className={styles.hometext}>Welcome!</h1>

      </div> */}

      <div className={styles.quote}>
        <h1 className={styles.caveat}>"Attending class isn't just about being present; it's about actively engaging in the journey of learning."</h1>
      </div>


      <div className={styles.homebtpos}>

        <Link href="/teacher" className={styles.homeBtn}>Teacher</Link>



      </div>

      <div className={styles.homebtpos}>



        <Link href="/student" className={styles.homeBtn} >Student</Link>

      </div>


      <div>

        <Image src={Homeimage} width={1024} alt="Homepageimage" className={styles.homimgpos} />

      </div>



    </div>
  );
};

export default HomePage;
