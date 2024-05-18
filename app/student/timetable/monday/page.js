

'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles.module.css';
import name from '../../../../Assets/reply_20dp.png';
import text from '../../../../Assets/NavBartex.png';
import { MdDelete } from "react-icons/md";

export default function Timetable() {
  const [timetable, setTimetable] = useState([]);
  const [newDay, setNewDay] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newcr, setNewcr] = useState('');

  useEffect(() => {
    const savedTimetable = localStorage.getItem('timetablemonday');
    if (savedTimetable) {
      setTimetable(JSON.parse(savedTimetable));
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const addItem = () => {
    if (newDay.trim() !== '' && newTime.trim() !== '') {
      const newItem = `${newDay} - ${newTime} - ${newcr}`;
      setTimetable([...timetable, newItem]);
      localStorage.setItem('timetablemonday', JSON.stringify([...timetable, newItem]));
      setNewDay('');
      setNewTime('');
      setNewcr('');
    }
  };

  const deleteItem = (index) => {
    const updatedTimetable = [...timetable];
    updatedTimetable.splice(index, 1);
    setTimetable(updatedTimetable);
    localStorage.setItem('timetablemonday', JSON.stringify(updatedTimetable));
  };

  return (
    <div className={styles.homecontainer}>

      <div>



        <div className="navbar bg-primary bg-base-100">
          <div className="navbar-start">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Link href="/student/timetable">
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

      <h1 className={styles.hometext}> Monday</h1>

      <div className={styles.teabtpos}>

        <div style={{ paddingBottom: '2vh' }}>
          <input
            type="text"
            value={newDay}
            onChange={(e) => setNewDay(e.target.value)}
            placeholder="Start Time (10AM)"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div style={{ paddingBottom: '2vh' }}>
          <input
            type="text"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            placeholder="Course (VLSI)"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div style={{ paddingBottom: '2vh' }}>
          <input
            type="text"
            value={newcr}
            onChange={(e) => setNewcr(e.target.value)}
            placeholder="Room (56)"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>

      </div>


      <div className={styles.teabtpos}>

        <button className={styles.subBtn} onClick={addItem}>Add</button>

      </div>

      <div className={styles.table}>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className={styles.aboreto2}>Time</th>
                <th className={styles.aboreto2}>Course</th>
                <th className={styles.aboreto2}>Room</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
              <tr >
                <th >

                  {timetable.map((item, index) => (
                    <div key={index}>
                      {index + 1}
                    </div>
                  ))}
                </th>
                <td className={styles.abeezee2}>

                  {timetable.map((item, index) => (
                    <div key={index}>
                      {item.split(' - ')[0]}
                    </div>
                  ))}

                </td>
                <td className={styles.abeezee}>

                  {timetable.map((item, index) => (
                    <div key={index} >
                      <div className='styles.abeezee'>
                        {item.split(' - ')[1]}
                      </div>

                    </div>
                  ))}

                </td>
                <td className={styles.abeezee}>

                  {timetable.map((item, index) => (
                    <div key={index}>
                      {item.split(' - ')[2]}
                    </div>
                  ))}

                </td>
                <td>
                  {timetable.map((item, index) => (
                    <div key={index}>
                      <button onClick={() => deleteItem(index)}>
                        <MdDelete />

                      </button>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
  );
}
