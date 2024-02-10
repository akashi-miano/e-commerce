import {logo, cartImg} from "../assets/index"
const Nav = () => {
  return (
    <nav className="bg-white border-b border-gray-800 py-6 font-titleFont" role="navigation">
        <div className="container flex justify-between items-center">
            <a href="" className="logo">
                <img src={logo} alt="Logo icon" className="w-[150px]"/>
            </a>
            <ul className="flex items-center gap-6">
                <li><a href="" className="capitalize font-semibold text-lg">home</a></li>
                <li><a href="" className="capitalize font-semibold text-lg">pages</a></li>
                <li><a href="" className="capitalize font-semibold text-lg">shop</a></li>
                <li><a href="" className="capitalize font-semibold text-lg">element</a></li>
                <li><a href="" className="capitalize font-semibold text-lg" >blog</a></li>
                <li className="relative">
                    <img src={cartImg} alt="Shopping cart icon" className="w-[32px]"/> 
                    <span className="absolute w-6 top-[10px] left-[6%] text-sm flex items-center justify-center font-semibold font-title-font">0</span>
                </li>
                <li><img src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile image"  className="w-8 h-8 rounded-full"/></li>
            </ul>

        </div>
    </nav>
  )
}

export default Nav