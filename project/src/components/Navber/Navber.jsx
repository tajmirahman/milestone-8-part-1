import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Navber = () => {

    const [open, setOpen] = useState();

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
    ];



    return (
        <div>
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>

                {
                    open === true ? <ImCross className="text-red-600"/> : <IoMdMenu />
                }


            </div>


            <ul className={`${open ? 'top-6':'-top-60'} md:flex mb-5 px-10 duration-1000 absolute`}>
                {
                    routes.map(route => <li key={route.id} className="mr-2">
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Navber;