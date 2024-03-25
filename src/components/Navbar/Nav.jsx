import React, { useState } from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link to={"/"} className="flex items-center hover:text-red-500 hover:underline transition-colors">
            Home
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link to={"/donation"} className="flex items-center hover:text-red-500 hover:underline transition-colors">
            Donation
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link to={"/Statistics"} className="flex items-center hover:text-red-500 hover:underline transition-colors">
            Statistics
          </Link>
        </Typography>
      </ul>
    );
  }

const Nav = () => {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
   
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
  return (
    <>
      <Navbar className="mx-auto max-w-7xl px-6 py-3 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 flex items-center gap-2"
        >
          <img src="../src/assets/logo.png" alt="" />
         <div>
            <h1 className='text-3xl font-bold text-red-400'>Donation</h1>
            <h3>Campaign</h3>
         </div>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
    </>
  )
}

export default Nav
