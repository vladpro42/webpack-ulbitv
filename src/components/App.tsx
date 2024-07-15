
import { Link, Outlet } from "react-router-dom"
import * as css from "./App.module.scss"
import beerPng from "@/assets/beer.png"
import giftJpg from "@/assets/cake.jpg"
import Cat from "@/assets/cat.svg"

export const App = () => {

    // if (__PLATFORM__ === 'desktop') {
    //     return <div>isdesktoplatform</div>
    // }
    // if (__PLATFORM__ === 'mobile') {
    //     return <div>ismobileplatform</div>
    // }

    return <div>
        <h2>hello!!!!! </h2>
        <h1>Platform{__PLATFORM__}</h1>
        <div>
            <img width={350} height={350} src={beerPng} alt="" />
            <img width={350} height={350} src={giftJpg} alt="" />
            <Cat width={350} height={350} />
        </div>
        <Link to={'/about'}>about</Link>
        <Link to={'/shop'}>shop</Link>
        <h1 className={css.title}>Hello world!</h1>
        <Outlet />
    </div>
} 