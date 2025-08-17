import { IoIosSearch } from "react-icons/io";
import { FaRegHeart ,  FaOpencart} from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navber = () => {
 
        
    
    return (
        <div className="flex flex-col gap-6 ">
   


      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
        <div>
          <img src="/public/images/main-logo.png" className="h-12 md:h-20" alt="" />
        </div>
        <div>
          <input type="text" name="" placeholder="Search here" className="p-2 text-lg border-2 border-[#06923E] w-80 h-12 rounded-full" id="" />
        </div>
        <div className=" p-2 rounded-full primary-bg text-3xl">
          <IoIosSearch />
        </div>
        </div>
        <div><a className="btn primary-bg md:p-6 text-sm p-2 md:text-lg text-white">Login</a></div>
      </div>

      <div className="flex justify-between items-center">

    
      <div className="flex justify-start items-center gap-6 p-2 list-none text-lg">
        <NavLink><li>Home</li></NavLink>
        <NavLink><li>All Category</li></NavLink>
        <NavLink><li>Become a Retailer</li></NavLink>
        <NavLink><li>Contact Us</li></NavLink>
        <NavLink><li>About Us</li></NavLink>
      </div>

      <div className="flex items-center gap-6 font-semibold">
        <h3 className="text-lg">English</h3>
        <div className="flex items-center gap-2 text-lg">
          <p className="text-3xl"><FaRegHeart /></p>
          <p>Wishlist</p>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <p className="text-4xl"><FaOpencart /></p>
          <p>Cart</p>
        </div>
       
        
      </div>
        </div>
        </div>
    );
};

export default Navber;