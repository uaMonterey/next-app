import styles from '../styles/Home.module.scss'
import Heading from "../components/Heading";
import Head from "next/head";

const Home = () => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text='Hello Next.JS'/>
    </div>
);

export default Home