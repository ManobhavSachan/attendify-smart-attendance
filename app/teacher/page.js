// pages/teacher.js

import Link from 'next/link';
import styles from '../styles.module.css';
import teaimage from '..//../Assets/Teacher Screen.png';
import Image from 'next/image';
import name from '../../Assets/reply_20dp.png'
import text from '../../Assets/NavBartex.png'



const TeacherPage = () => {
  return (
    <div className={styles.homecontainer}>

      {/* <div>
        <h1 className={styles.hometext}>Welcome Teacher!</h1>
      </div> */}



<div>


<div className="navbar bg-primary bg-base-100">
  <div className="navbar-start">
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <Link href="/home">
          {/* <TiArrowBack /> */}
          <Image className={styles.navimgpos} src={name} />
        </Link>
      </div>
    </button>
  </div>

  <div className="navbar-center">
    <Image className={styles.navtexpos} src={text} width={150} />
    {/* <h1 className={styles.aboretosmall}>
      {"ATTENDIFY"}
    </h1> */}
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



      <div className={styles.quote2}>
        <h1 className={styles.caveat}>{"The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires."} </h1>
      </div>

      <div className={styles.teabtpos}>

        <Link href="/teacher/timetable" className={styles.teaBtn}>
          TimeTable
        </Link>

      </div>

      <div className={styles.teabtpos}>

        <Link href="/teacher/checkattendance" className={styles.teaBtn}>
          Check Attendance
        </Link>

      </div>


      <div className={styles.teabtpos}>

        <Link href="/teacher/snapattendance" className={styles.teaBtn}>
          Snap Attendance
        </Link>

      </div>

      <div className={styles.teabtpos}>

        <Link href="/teacher/registernew" className={styles.teaBtn}>
          Register new student
        </Link>

      </div>

      {/* <div className={styles.teabtpos}>

        <Link href="/home" className={styles.backbtn}>
          Home
        </Link>

      </div> */}

      <div>

        <Image src={teaimage} width={1024} alt="Teacherpageimage" className={styles.teaimgpos} />

      </div>



    </div>
  );
};

export default TeacherPage;
