import { useDispatch } from "react-redux"
import { toggleMenu } from "../../utils/appSlice";
import { YOUTUBE_LOGO,HAMBURGER ,USER_AVATAR,SEARCH_ICON} from "../utils/constants";


const Head = () => {
  const dispatch = useDispatch();
  const toggleSideMenu = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-2  shadow-sm ">
      <div className="flex flex-row gap-3 col-span-1">
        <img src={HAMBURGER} alt="hamburger icon" className="h-8 cursor-pointer"  onClick={()=>toggleSideMenu()}/>
        <img src={YOUTUBE_LOGO} alt="Youtube Logo" className="h-8 cursor-pointer"  />
      </div>

      <div className="col-span-10  flex justify-center items-center ">
        <input type="text" className="w-1/3 h-[40px] border-2 border-gray-500 rounded-l-full  p-4 font-bold text-xl"/>
        <button className="rounded-r-full  border-gray-500 border-2 p-0.5">
          <img src={SEARCH_ICON} alt="searchBar" className="h-8 place-content-center" />
        </button>
      </div>
      <div className="col-span-2">
        <img src={USER_AVATAR} alt="user_logo" className="h-8" />
      </div>
    </div>
  )
}

export default Head