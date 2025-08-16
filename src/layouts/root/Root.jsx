import { Outlet } from "react-router-dom";
import Navber from "../../components/Navber";
import Foooter from "../../components/Foooter";

const Root = () => {
    return (
        <div className="manrope">
            <div className="md:container p-2 md:mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            </div>
            <Foooter></Foooter>
        </div>
    );
};

export default Root;