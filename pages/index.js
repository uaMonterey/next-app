import styles from '../styles/Home.module.scss'
import Heading from "../components/Heading";

const Home = () => (
    <div className={styles.wrapper}>
        <Heading text='Hello Next.JS'/>
    </div>
);

export default Home