import {FC, useEffect} from "react";
import {useRouter} from "next/router";
import Heading from "../components/Heading";
import styles from '/styles/404.module.scss'

const Error: FC = () => {
    const router = useRouter()

    useEffect(() => {
        let timer = setTimeout(() => {
            router.push('/').then(r => r)
        }, 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [router])

    return (
        <div className={styles.wrapper}>
            <div>
                <Heading text='404'/>
                <Heading tag='h2' text='Something is going wrong...'/>
            </div>
        </div>
    )
}
export default Error