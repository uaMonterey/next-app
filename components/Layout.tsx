import {FC, ReactNode} from "react";
import Header from './Header'
import Footer from './Footer'

type TLayoutProps = {
    children: ReactNode
}
const Layout: FC<TLayoutProps> = ({children}) => (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
)

export default Layout
