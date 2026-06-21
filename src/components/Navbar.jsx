import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { navItems } from "../constants";
import Login from './Login';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-8 w-33 mr-0" src={logo} alt="Logo" />
          </div>
          
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li id="navv" key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* FIXED HANDLER CALL HERE */}
            <button onClick={() => setShowLogin(true)} className="py-2 px-3 border rounded-md" id="get">
              Sign In
            </button>
            <a
              href="#" id="get"
              className="bg-gradient-to-r from-pink-500 to-blue-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {mobileDrawerOpen && (
          <div id="tog" className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a onClick={toggleNavbar} href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button onClick={() => { setShowLogin(true); toggleNavbar(); }} className="py-2 px-3 border rounded-md">
                Sign In
              </button>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-pink-500 to-blue-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </div>
    </nav>
  );
};

export default Navbar;
