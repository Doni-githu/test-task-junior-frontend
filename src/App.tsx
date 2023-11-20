import { lazy, Suspense } from "react"
import redBall from "./assets/img/redBall.svg"
import purpleBall from "./assets/img/purpleBall.svg"

const Header = lazy(() => import("./components/Header"))
const Footer = lazy(() => import("./components/Footer"))
function App() {

  return (
    <>
      <div className="father">
        <div className="father-container">
          <Suspense>
            <Header />
            <Footer />
          </Suspense>
        </div>
      </div>


      <div className="red">

      </div>

      <div className="violet">

      </div>
      <div className="violetBall">
        <img src={purpleBall} alt="" />
      </div>

      <div className="redBall">
        <img src={redBall} alt="" />
      </div>
    </>
  )
}

export default App
