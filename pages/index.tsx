import {FC} from "react";
import Head from "next/head";
import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss'
import Socials from "../components/Socials";
import {TSocial} from "../types";

type TSocialsProps = {
    socials: TSocial
}

export const getStaticProps = async () => {
    const response = await fetch(`${process.env.API_HOST}/socials/`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {socials: data}
    }
}

const Home: FC<TSocialsProps> = ({socials}) => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text='Next.js'/>
        <Socials socials={socials}/>
    </div>
);

export default Home