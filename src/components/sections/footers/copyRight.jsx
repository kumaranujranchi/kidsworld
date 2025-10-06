import { cn } from '@/lib/utils'
import React from 'react'
import { Link } from 'react-router-dom'

const CopyRight = ({ color }) => {
    return (
        <div className="pt-[75px] overflow-x-hidden">
            {/* Bottom section with two rows: row-1 (left/right), row-2 (credit at bottom) */}
            <div className="pt-7.5 pb-8 border-t border-t-white border-opacity-20 w-full">
                {/* Row 1: Left copyright, Right legal links */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    {/* Left: Copyright */}
                    <p className={cn('wow fadeInLeft text-center sm:text-left', color)} data-wow-delay=".3s">© <Link to="/">Kids World</Link> 2025 | All rights reserved</p>

                    {/* Right: Legal links */}
                    <ul className="wow fadeInUp flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-7.5 text-center sm:text-right" data-wow-delay=".3s">
                        <li><Link to="#" className={cn('', color)}>Terms & Conditions</Link></li>
                        <li><Link to="#" className={cn('', color)}>Privacy Policy</Link></li>
                        <li><Link to="/contact-us" className={cn('', color)}>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Row 2: Credit line at very bottom */}
                <p className="wow fadeInUp mt-5 text-center" data-wow-delay=".3s">
                    <a href="https://synergybrandarchitect.in" target="_blank" rel="noopener noreferrer" className={cn('', color)}>
                        Designed and maintained by Synergy Brand Architect
                    </a>
                </p>
            </div>
        </div>
    )
}

export default CopyRight