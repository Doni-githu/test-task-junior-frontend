import { lazy, Suspense } from "react"

const Navbar = lazy(() => import("./Navbar"))
const Showcase = lazy(() => import("./Showcase"))
const Header = () => {
    return (
        <div className="top">
            <Suspense>
                <Navbar />
                <Showcase />
            </Suspense>
        </div>
    )
}

export default Header
