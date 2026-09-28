import { Outlet } from "react-router-dom"
import Header from "./Header"
import StarField from "./StarField"
import Footer from "./Footer"

export default function HeroLayout() {
  return (
    <>
      <StarField />
      <div className="vignette" aria-hidden="true" />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
