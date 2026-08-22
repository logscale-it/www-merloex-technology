import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Datenschutz from './pages/Datenschutz'
import FmPage from './pages/FmPage'
import { infrastrukturell, kaufmaennisch, technisch } from './pages/fmPages'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import Jobs from './pages/Jobs'
import Kontakt from './pages/Kontakt'
import UeberUns from './pages/UeberUns'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="technisches-facility-management" element={<FmPage data={technisch} />} />
        <Route path="infrastrukturelles-facility-management" element={<FmPage data={infrastrukturell} />} />
        <Route path="kaufmaennisches-facility-management" element={<FmPage data={kaufmaennisch} />} />
        <Route path="ueber-uns" element={<UeberUns />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutzerklaerung" element={<Datenschutz />} />
      </Route>
    </Routes>
  )
}
