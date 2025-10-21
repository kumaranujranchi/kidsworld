import React from 'react'
import { Link } from 'react-router-dom'
import { FaCalendarDays, FaComments, FaUser } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import SlideUp from '@/lib/animations/slideUp'

const CardOne = ({ id, title, thumb, ctaPath }) => {
    return (
        <SlideUp delay={id}>
            <div className="shadow-3xl bg-background rounded-[10px] group grid md:grid-cols-[220px_1fr]">
                <img src={thumb} className="object-cover w-[220px] h-[221px] rounded-l-[10px]" />
                <div className="pt-7.5 lg:pb-10 pb-7.5 lg:px-10 md:px-7.5">
                    <h4><Link to={"/blog-details"} state={{ src: thumb }} className="lg:text-[28px] sm:text-[26px] text-xl font-bold lg:leading-[148%] sm:leading-[140%] leading-[120%] group-hover:text-secondary-foreground transition-all duration-500">{title}</Link></h4>
                    <div className="lg:mt-10 mt-7">
                        <Button asChild variant={"outline"}>
                            <Link to={"/blog-details"} state={{ src: thumb }} className="inline-flex items-center gap-2.5">Read More</Link>
                        </Button>
                    </div>
                    <ul className="flex gap-7.5 pt-5 flex-wrap">
                        <li className='flex items-center'> <FaCalendarDays className='text-foreground' /> <span className="text-[#686868] ml-2.5">January 19, 2024</span> </li>
                        <li className='flex items-center'> <FaUser className='text-foreground' /> <span className="text-[#686868] ml-2.5">By admin</span> </li>
                        <li className='flex items-center'> <FaComments className='text-foreground' /> <span className="text-[#686868] ml-2.5">Comments (05)</span> </li>
                    </ul>
                </div>
            </div>
        </SlideUp>
    )
}

export default CardOne