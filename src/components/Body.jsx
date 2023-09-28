import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className="grid grid-flow-col">
        <Sidebar/>
       <Outlet/>
    </div>
  )
}

export default Body

//C:\Users\DELL\Desktop\react\namasta-youtube\namasta-youtube\src\components\Body.jsx
//src\components\Body.jsx