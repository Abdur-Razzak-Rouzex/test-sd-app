import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>শিক্ষাদীক্ষা</title>
                <meta name="description" content="শিক্ষাদীক্ষা"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <span style={{color: '#0070f3'}}>শিক্ষাদীক্ষা</span>
                </h1>

                <p className={styles.description}>
                    Our website is under{' '}
                    <code className={styles.code}>development</code>
                    Its coming very soon... 😍
                </p>

                <img src="/success.jpg" alt="শিক্ষাদীক্ষা"/>

            </main>

        </div>
    )
}
