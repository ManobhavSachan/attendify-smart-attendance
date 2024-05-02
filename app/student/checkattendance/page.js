

'use client'

import { useState } from 'react';
 import styles from '../../styles.module.css';
import Link from 'next/link';
import checkimage from '../../../Assets/checkatt.png';
import Image from 'next/image';
import name from '../../../Assets/namelogo.png'
import { TiArrowBack } from "react-icons/ti";


export default function AttendanceChecker() {
  const [rollNumber, setRollNumber] = useState('');
  const [attendancePercentage, setAttendancePercentage] = useState(null);
  const [studentName, setStudentName] = useState('');

  const studentsData = [
    { rollNumber: '20ECE1031', name: 'Teja', attendance: 25 },
    { rollNumber: '20ECE1041', name: 'Manobhav', attendance: 85 },
    { rollNumber: '20ECE1013', name: 'Deepak', attendance: 60 },
    // Add more dummy data as needed
  ];

  const checkAttendance = () => {
    const student = studentsData.find(student => student.rollNumber === rollNumber);
    if (student) {
      setStudentName(student.name);
      setAttendancePercentage(student.attendance);
    } else {
      setStudentName('');
      setAttendancePercentage(null);
      alert('Student not found!');
    }
  };

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

      <div>
        <h1 className={styles.hometext}>Attendance Checker</h1>
      </div >


      <div>

        <Image src={checkimage} width={1024} alt="checkpageimage" className={styles.checkimgpos} />

      </div>

      <div className={styles.teabtpos}>
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Enter roll number"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <div className={styles.teabtpos}>
          <button className={styles.subBtn} onClick={checkAttendance}>Submit</button>
        </div>
        {studentName && (
          <p>Student Name: {studentName}</p>
        )}
        {attendancePercentage !== null && (
          <h1>Attendance Percentage: {attendancePercentage}%</h1>
        )}
      </div>
    </div>
  );
}
