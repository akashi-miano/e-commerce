import { logo, payment } from "../assets/index";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <footer className="bg-black text-[#ddd] py-20 font-titleFont">
      <div className="container">
        <nav
          className={
            isMobile
              ? "grid md:grid-cols-4 items-center flow-content--xm"
              : "grid md:grid-cols-4 items-center"
          }
          role="navigation"
        >
          <div className="flow-content--m">
            <ul className="flow-content--m">
              <li>
                <img src={logo} alt="logo" />
              </li>
              <li>&copy; ReactBD.com</li>
              <li>
                <img src={payment} alt="payment methods image" />
              </li>
            </ul>
            <ul className="socials flex items-center gap-4 md:justify-start justify-center">
              <li>
                <a href="">
                  <FaGithub
                    size={25}
                    className="hover:text-green-500  focus:text-green-500 duration-300 hover:cursor-pointer "
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube
                    size={25}
                    className="hover:text-red-500  focus:text-red-500 duration-300 hover:cursor-pointer "
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebook
                    size={25}
                    className="hover:text-blue-500  focus:text-blue-500 duration-300 hover:cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter
                    size={25}
                    className="hover:text-cyan-500  focus:text-cyan-500 duration-300 hover:cursor-pointer "
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram
                    size={25}
                    className="hover:text-pink-500  focus:text-pink-500 duration-300 hover:cursor-pointer "
                  />
                </a>
              </li>
            </ul>
          </div>
          <ul className="justify-self-center flow-content--s md:justify-start justify-center md:w-fit w-full text-center md:text-left">
            <header className="mb-4">
              <h2 className="text-3xl font-titleFont capitalize">locate us</h2>
            </header>
            <li>
              <a href="">MBD, Ruwi, Muscat-Oman</a>
            </li>
            <li>
              <a href="tel:00968 97859628">Mobile: 00968 97859628</a>
            </li>
            <li>
              <a href="tel:00968 24769821">Phone: 00968 24769821</a>
            </li>
            <li>
              <a href="mailto:bazar@gmail.com">E-mail: bazar@gmail.com</a>
            </li>
          </ul>
          <ul className="justify-self-center flow-content--s md:justify-start justify-center w-full md:w-fit text-center md:text-left">
            <header className="mb-4">
              <h2 className="text-3xl font-titleFont capitalize">profile</h2>
            </header>
            <li>
              <a
                href=""
                className="flex items-center gap-4 justify-center md:justify-start -translate-x-[3%] md:translate-x-0"
              >
                <RiContactsFill /> My account
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-4 justify-center md:justify-start -translate-x-[7%] md:translate-x-0"
              >
                <FaPaypal /> Checkout
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <FaHome /> Order tracking
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-4 justify-center md:justify-start translate-x-[1%] md:translate-x-0"
              >
                <FaLocationDot /> Help & support
              </a>
            </li>
          </ul>
          <form action="" className="">
            <div className="wrapper flow-content--m">
              <input
                type="email bg-black text-white"
                className="w-full bg-black text-white border-2 border-gray-700 px-2 py-1 placeholder:text-sm"
                placeholder="E-mail"
              />
              <button
                type="submit"
                className="btn bg-black text-white w-full border-2 border-gray-700 hover:bg-white hover:text-black  focus:bg-white focus:text-black duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
