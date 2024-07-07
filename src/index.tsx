import reactDom from 'react-dom/client'
import { App } from "@/components/App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Shop } from '@/components/pages/shop'
import { LazyAbout } from '@/components/pages/about/About.lazy'
import { Suspense } from 'react'

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = reactDom.createRoot(root)



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        children: [
            {
                path: 'about',
                element: <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
            },
            {
                path: 'shop',
                element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
            }
        ],
    }
])


container.render(<RouterProvider router={router} />)