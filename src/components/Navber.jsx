import { NavLink } from "react-router-dom";


const Navber = () => {
    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/becomehost"><li>Become a Host</li></NavLink>
        <NavLink to="/property"><li>Property</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
    </>
        
    
    return (
        <div className="">
   


      <div className="flex justify-between items-center">
        <div>
          <img src="/public/images/logos.png" className="h-12 md:h-24" alt="" />
        </div>
        <div></div>
        <div><a className="btn primary-bg md:p-6 text-sm p-2 md:text-lg text-white">Login</a></div>
      </div>
        </div>
    );
};

export default Navber;