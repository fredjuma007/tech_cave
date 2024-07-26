"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
    scrollToWebsiteDesign: () => void;
    scrollToGraphicDesign: () => void;
    scrollToWordpressWeb: () => void;
    scrollToBrands: () => void;
  }

const Navbar: React.FC<NavbarProps> = ({ 
    scrollToWebsiteDesign, 
    scrollToGraphicDesign, 
    scrollToWordpressWeb, 
    scrollToBrands,
    }) => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }

    const closeDropdown = () => {
        setIsDropdownVisible(false);
    }

    return ( 
    <div>
        <div className="p-6 md:p-10 flex items-center justify-between z-50">
            <div>
                <Link className="cursor-pointer" href="/">
                    <Image 
                        priority
                        src="images/logo.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-10 h-10 md:w-14 md:h-14"
                    />
                </Link>
            </div>
            <div className="cursor-pointer hidden md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent bg-gradient-to-b
              from-neutral-50 to bg-neutral-500 bg-opacity-50">
        

                <Link href="/pricing" className="hover:text-gray-50">
                    Pricing
                </Link>
            </div>

            <div className="flex md:hidden">
                {isDropdownVisible ? (
                    // display x icon if dropdown is visible
                    <div
                        onClick={toggleDropdown}
                        className="w-8 h-8 text-slate-300 cursor-pointer"
                    >
                        <X />
                        <DropDownMenu onClose={closeDropdown} />
                        </div>
                ) : (
                    <AlignJustify
                        onClick={toggleDropdown}
                        className="w-8 h-8 text-slate-300 cursor-pointer"
                    />
                )}
            </div>

            <div className="hidden md:flex">
                <Link 
                href="/contact" 
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border
                 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                 bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none 
                 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Contact
                </Link>
                
            </div>

        </div>
    </div> 
    );
}
 
export default Navbar;