import { lazy, Suspense } from "react"
const FooterLeftSide = lazy(() => import("./FooterLeftSide"))
const FooterRightSide = lazy(() => import("./FooterRightSide"))

const Footer = () => {
    return (
        <div className="footer">
            <Suspense>
                <FooterLeftSide />
                <FooterRightSide />
            </Suspense>
        </div>
    )
}

export default Footer
