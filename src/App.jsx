import Sidebar, { SidebarItem } from "./components/Sidebar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
function App() {

  return (
    <>
    <Sidebar>
      <SidebarItem icon={<FontAwesomeIcon icon={faMedal} />} text="Winners"/>
    </Sidebar>
    </>
  )
}

export default App
