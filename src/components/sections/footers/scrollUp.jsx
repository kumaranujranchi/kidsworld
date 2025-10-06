import React, { useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollUp = () => {
    useEffect(() => {
        const scroll_up = document.getElementById("scroll-up")
        scroll_up.addEventListener("click", () => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        })
    }, [])
    return (
        <div id="scroll-up" aria-label="Scroll to top" className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 w-12.5 h-12.5 rounded-full bg-primary text-cream-foreground flex justify-center items-center border-[3px] border-white shadow-lg cursor-pointer">
            <FaArrowUp />
        </div>
    )
}

export default ScrollUp