import ScrollToTop from './components/ScrollToTop';
import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Pages />
      <Toaster />
      <ScrollToTop />
      <Analytics />
    </>
  )
}

export default App 