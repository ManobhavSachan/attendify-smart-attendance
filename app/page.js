// File: pages/index.js

import Head from 'next/head';
import styles from '../app/styles.module.css';
import OnboardingButton from '../app/onboarding/page';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ATTENDIFY - Onboarding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <OnboardingButton /> {/* Render the OnboardingButton component */}
      </main>
    </div>
  )
}
