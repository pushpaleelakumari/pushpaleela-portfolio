import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./core/routing/routes"
import HeroLayout from "./components/layouts/HeroLayout"
import Home from "./pages/home/Home"

// Home is imported eagerly (not React.lazy): the prerendered HTML has no
// Suspense boundary markers, so a lazy route would fail hydration.
function App() {
  return (
    <Routes>
      <Route element={<HeroLayout />}>
        <Route path={ROUTES.home} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
