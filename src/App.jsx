import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavbarDefault } from "/components/Navbar";
import {CarouselWithContent} from "./components/cards";



function App() {
  return (
    <div>
    <NavbarDefault/>
    <CarouselWithContent/>
    </div>
  )
}

export default App
