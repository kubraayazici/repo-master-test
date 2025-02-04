import { useState } from "react";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import { FaUser, FaShoppingCart, FaSearch, FaLessThanEqual } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { useRouter } from "next/router";
const Header = () => {
  const [isSearchModal,setIsSearchModal] = useState(false);
  const [isMenuModal,setIsMenuModal] = useState(false);
  const handleClick = () => {
    setIsSearchModal(true);
  };

  const router = useRouter();
  console.log(router.asPath);
  return (
      <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"} `}>
      <div className="container text-white mx-auto flex justify-between items-center h-full">
        <div><Logo/></div>
        <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!grid place-content-center"}`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Home</a></li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Menu</a></li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">About</a></li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"><a href="">Book Table</a></li>
          </ul>
          {isMenuModal && (<button className='absolute top-4 right-4 z-50' onClick={()=>setIsMenuModal(false)}>
            <MdOutlineCancelPresentation size={25} className='transition-all'/>
          </button>)}
        </nav>
        
        <div className="flex gap-x-3 items-center">
          <a href="#"><FaUser className="hover:text-primary transition-all"/></a>
          <a href="#"><FaShoppingCart className="hover:text-primary transition-all"/></a>
          <button onClick={handleClick}><FaSearch className="hover:text-primary transition-all"/></button>
          <a href="#" className="sm:inline-block hidden"><button className="btn-primary">Order Online</button></a>
          <button className="sm:hidden inline-block" onClick={()=> setIsMenuModal(true)}><GiHamburgerMenu className="text-xl hover:text-primary transition-all"></GiHamburgerMenu></button>
        </div>
      </div>
      {isSearchModal && (<Search setIsSearchModal={setIsSearchModal}/>)}
    </div>
    
  );
};

export default Header