import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            path: "/home"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blogs"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
    ]
    return (
        <div className="bg-base-300 text-slate-900">
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <Link href={'/'}>
                        <Image alt="logo" src="/assets/logo.svg" height={60} width={100}></Image>
                    </Link>

                </div>

                <div className="navbar-center  lg:flex">
                    <div className="flex items-center space-x-6">
                        {
                            navItems.map((item) => (
                                <Link className="font-semibold hover:text-primary duration-300" href={item.path} key={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="flex space-x-3 items-center pr-4 text-3xl">
                        <CiShoppingCart />
                        <CiSearch />
                    </div>
                    <a className="btn btn-outline btn-primary px-8">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;