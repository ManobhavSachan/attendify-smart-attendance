import Link from 'next/link';
import styles from '../../styles.module.css';
import Image from 'next/image';
import name from '../../../Assets/namelogo.png'
import { TiArrowBack } from "react-icons/ti";

const timetable = () => {
  return (
    <div className={styles.homecontainer}>


<div className="navbar bg-primary bg-base-100">
          <div className="navbar-start">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Link href="/student">
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


      <h1 className={styles.hometext}>Choose your day!</h1>

      <div className={styles.ttquote}>
        <h1 className={styles.caveat}>{"Timetables are the architects of discipline and organization and it is a blueprint for productivity."} </h1>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/student/timetable/monday" className={styles.dayBtn}>
          Monday
        </Link>
      </div>

      <div className={styles.teabtpos}>

        <Link href="/student/timetable/tuesday" className={styles.dayBtn}>
          Tuesday
        </Link>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/student/timetable/wednesday" className={styles.dayBtn}>
          Wednesday
        </Link>
      </div>


      <div className={styles.teabtpos}>

        <Link href="/student/timetable/thursday" className={styles.dayBtn}>
          Thursday
        </Link>
      </div>


      <div className={styles.teabtpos}>
        <Link href="/student/timetable/friday" className={styles.dayBtn}>
          Friday
        </Link>
      </div>

      <div className={styles.teabtpos}>
        <Link href="/student/timetable/saturday" className={styles.dayBtn}>
          Saturday
        </Link>
      </div>

      {/* <div className={styles.teabtpos}>

        <Link href="/student/timetable/update" className={styles.dayBtn}>
          Update Time Table
        </Link>
      </div> */}

    </div>
  );
};

export default timetable;
