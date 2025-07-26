// import reactDom from 'react-dom/client'
// import { App } from "@/components/App"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Shop } from '@/components/pages/shop'
// import { LazyAbout } from '@/components/pages/about/About.lazy'
// import { Suspense } from 'react'
import "./main.css";

type User = {
  id: number | string;
  name: string;
  lastname: string;
  age: number;
};

const user: User = {
  age: 24,
  id: 1,
  lastname: "bondarev",
  name: "vlad",
};

const btn = document.querySelector("#click");

if (btn) {
  btn.addEventListener("click", () => {
    document.body.style.background = "red";
  });
}
