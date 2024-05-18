"use client";
import styles from "../../styles.module.css";
import { useState } from "react";
import Link from "next/link";
import checkimage from "../../../Assets/checkatt.png";
import Image from "next/image";
import name from '../../../Assets/reply_20dp.png';
import text from '../../../Assets/NavBartex.png';
import axios from "axios";

export default function Register() {
  const [image, setImage] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [annotatedImage, setAnnotatedImage] = useState(null);
  const [upscaling, setUpScaling] = useState("1");
  const [threshold, setThreshold] = useState("0.6");
  const [detectedPersons, setDetectedPersons] = useState([]);
  const [imageId, setImageId] = useState(null);
  const [studentName, setStudentName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const getCurrentDateTimeString = () => {
    const now = new Date();

    // Get the date components
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
    const day = String(now.getDate()).padStart(2, "0");

    // Get the time components
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Construct the string in the desired format
    const dateTimeString = `${year}_${month}_${day}_${hours}_${minutes}_${seconds}`;

    return dateTimeString;
  };
  console.log(getCurrentDateTimeString());
  const uploadTheImage = async () => {
    if (image && uploadImage) {
      const now = rollNo + "_" + studentName;
      console.log(now);
      alert("Just before put call");
      // setImageId(now);
      try {
        const response = await axios.put(
          `https://h30rztz2q8.execute-api.ap-south-1.amazonaws.com/dev/faceapp-user-images/${now}.jpeg`,
          uploadImage,
          {
            headers: {
              "Content-Type": "image/jpeg",
            },
          }
        );
        alert("Just after put call");
        console.log("response", response);
      } catch (error) {
        console.error("Error processing image:", error);
        alert("Error processing image:", error);
      }
    } else {
      console.log("No image selected");
    }
  };

  const selectImage = async () => {
    alert("Select Image");
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    // Add event listener to handle file selection
    fileInput.addEventListener("change", async (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        convertToBlob(imageUrl);
        setUploadImage(null);
        setAnnotatedImage(null);
      }
    });

    // Check if camera capture is supported and allow capture
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      fileInput.capture = "camera";
    }

    // Click the file input to trigger file selection
    fileInput.click();
  };

  const convertToBlob = (imageUrl) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => setUploadImage(blob))
      .catch((error) =>
        console.error("Error converting image to blob:", error)
      );
  };

  return (
    <div className={styles.homecontainer}>
      
      <div>


        <div className="navbar bg-primary bg-base-100">
          <div className="navbar-start">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Link href="/teacher">
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


      {/* <div>
      <h1 className={styles.hometext}>Check Attendance</h1>
      </div> */}

      <div className={styles.reg}>
        <div className={styles.teabtpos}>
          <label className={styles.formele} htmlFor="Name">
            Name:{" "}
          </label>
          <div>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Manobhav_Sachan"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
        </div>

        <div>
          <div className={styles.teabtpos}>
            <label className={styles.formele} htmlFor="Roll No">
              Student Roll Number:{" "}
            </label>
            <div>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="20ECE1041"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </div>

          <div className={styles.teabtpos}>
            <button className={styles.dayBtn} onClick={selectImage}>
              Select Image
            </button>
          </div>

          <div className={styles.teabtpos}>
            <button className={styles.dayBtn} onClick={uploadTheImage}>
              Submit
            </button>
          </div>

          <div className={styles.teabtpos}>
            <div className={styles.imgbtpos}>
              {image && (
                <Image
                  src={image}
                  alt="Selected Image"
                  width={300}
                  height={300}
                />
              )}
            </div>
            <div className={styles.teabtpos}>
              {detectedPersons.length != 0 && (
                <div>
                  <h2>Detected Persons</h2>
                  <ul>
                    {detectedPersons.map((person, index) => (
                      <li key={index}>
                        <p>
                          <strong>Person {index + 1}</strong>
                        </p>
                        <p>Name: {person.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>



      <div>
        <Image
          src={checkimage}
          height={1024}
          width={400}
          alt="checkpageimage"
          className={styles.checkimgpos}
        />
      </div>
    </div>
  );
}
