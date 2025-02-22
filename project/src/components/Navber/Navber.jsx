

const Navber = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];



    return (
        <div>
            <ul className="md:flex mb-5">
            {
                routes.map(route=> <li key={route.id} className="mr-2"><a  href={route.path}></a>{route.name}</li>)
            }
            </ul>
        </div>
    );
};

export default Navber;