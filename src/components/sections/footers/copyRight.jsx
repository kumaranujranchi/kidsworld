import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'

const CopyRight = ({ color }) => {
    return (
        <div className="pt-[75px] overflow-x-hidden">
            {/* Switch to a 3-column grid on large screens for equal alignment: left, center, right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4 pt-7.5 pb-8 border-t border-t-white border-opacity-20 w-full">
                {/* Left: Copyright */}
                <p className={cn('wow fadeInLeft text-center lg:text-left', color)} data-wow-delay=".3s">© <Link to="/">Kids World</Link> 2025 | All rights reserved</p>

                {/* Center: Legal links */}
                <ul className="wow fadeInUp flex flex-wrap justify-center items-center gap-4 sm:gap-7.5 text-center" data-wow-delay=".3s">
                    <li><Link to="#" className={cn('', color)}>Terms & Conditions</Link></li>
                    <li><Link to="#" className={cn('', color)}>Privacy Policy</Link></li>
                    <li><Link to="#" className={cn('', color)}>Contact Us</Link></li>
                </ul>

                {/* Right: Attribution */}
                <p className="wow fadeInRight text-center lg:text-right" data-wow-delay=".3s">
                    <a href="https://synergybrandarchitect.in" target="_blank" rel="noopener noreferrer" className={cn('', color)}>
                        Designed and maintained by Synergy Brand Architect
                    </a>
                </p>
            </div>
        </div>
    )
}

export default CopyRight