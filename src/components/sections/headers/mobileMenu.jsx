import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPlus, FaXmark } from "react-icons/fa6";
// removed: import logo from "@/assets/images/logo.png"
// Switch to shared Logo component
import Logo from '@/components/ui/logo'
import { menuList } from '@/lib/fackdata/menuList'
import ExtraInfo from './extraInfo';

const MobileMenu = ({ isMobleMenuActive, setIsMobleMenuActive }) => {
    const [dropdownActive, setDropdownActive] = useState(null)
    const {pathname} = useLocation()

    useEffect(() => {
        setDropdownActive(null)
        setIsMobleMenuActive(false)
    }, [pathname])

    // Close on ESC for accessibility
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') setIsMobleMenuActive(false)
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [setIsMobleMenuActive])
    
    return (
        <div className="block xl:hidden">
            {/* Screen overlay with pointer-events control */}
            <div className={`fixed inset-0 w-full h-full bg-black/40 backdrop-blur-[2px] transition-opacity ${isMobleMenuActive ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`} aria-hidden={!isMobleMenuActive}></div>
            {/* Slide-in panel with responsive max-width and safe-area padding */}
            <nav className={`bg-warm border-l-2 border-l-primary w-full max-w-[85vw] sm:max-w-md min-h-screen h-full overflow-y-auto p-7 shadow-md fixed  ${isMobleMenuActive ? "right-0" : "-right-full"} top-0 z-50 transition-all duration-500`} aria-label="Mobile Navigation">
                <div className="flex justify-between items-center">
                    {/* Replaced nested anchor with Logo to avoid <a> inside <a> */}
                    <Logo />
                    <button type="button" aria-label="Close mobile menu" className="bg-primary w-11 h-11 text-cream-foreground flex items-center justify-center rounded-[4px] left-4" onClick={() => setIsMobleMenuActive(false)}>
                        <FaXmark className="text-xl" />
                    </button>
                </div>
                <ul className=" mt-6">
                    {
                        menuList.map(({ dropDownMenu, id, label, path }) => {
                            const isHome = path === '/'
                            return (
                                <li key={id} className="leading-[164%] relative w-full dropdown">
                                    <Link
                                        onClick={(e) => {
                                            // For non-home items with dropdowns, toggle open without navigating on '#'
                                            if (dropDownMenu && dropDownMenu.length) {
                                                e.preventDefault()
                                                setDropdownActive(dropdownActive === id ? null : id)
                                            } else {
                                                setIsMobleMenuActive(false)
                                            }
                                        }}
                                        to={path}
                                        className="font-jost py-3 border-b border-b-slate-300 text-[#385469] flex justify-between items-center"
                                    >
                                        <span>{label}</span>
                                        {dropDownMenu.length && <FaPlus />}
                                    </Link>
                                    {dropDownMenu.length &&
                                        <ul className={`min-w-56 w-full transition-all duration-500 ${dropdownActive === id ? "max-h-[600px] overflow-auto pt-3 no-scrollbar" : "max-h-0 overflow-hidden"}`}>
                                            {dropDownMenu.map(({ id, label, path }) => {
                                                return (
                                                    <li key={id}>
                                                        <Link to={path} onClick={() => setIsMobleMenuActive(false)} className="text-[#385469] font-jost hover:text-secondary-foreground transition-all duration-500 py-2.5 px-6 block border-b border-b-slate-300">{label}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <ExtraInfo />
            </nav>
        </div>
    )
}

export default MobileMenu