import React from "react"
import { createRoot } from "react-dom/client"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const root = createRoot(document.getElementById('root'))

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

root.render(<Page />)
