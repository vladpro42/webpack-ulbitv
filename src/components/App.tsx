
import { Link, Outlet } from "react-router-dom"
import * as css from "./App.module.scss"
import beerPng from "@/assets/beer.png"
import giftJpg from "@/assets/cake.jpg"
import Cat from "@/assets/cat.svg"

export const App = () => {
    return <div>
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