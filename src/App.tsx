import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./core/routing/routes"
import HeroLayout from "./components/layouts/HeroLayout"

const Home = lazy(() => import("./pages/home/Home"))

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<HeroLayout />}>
          <Route path={ROUTES.home} element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
