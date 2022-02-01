import {FC} from 'react'
import {GetServerSideProps} from "next";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import {TContact} from "../../types";

type TContactsProps = {
    contact: TContact
}

// SSR - Server Side Rendering
export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {contact: data}
    }
}

const Contact: FC<TContactsProps> = ({contact}) => {

    return (

        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact}/>
        </>
    )
}

export default Contact
