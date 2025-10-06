import SlideUp from '@/lib/animations/slideUp'
import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'

const ContactAddress = () => {
    return (
        <div className="lg:pb-15 lg:pt-15 pb-10 pt-10">
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
                    <SlideUp delay={2}>
                        <div className="bg-background rounded-md shadow-3xl pt-5 pb-7.5 px-7.5 text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green">
                                <span className="text-cream-foreground text-[28px]"><FaLocationDot /> </span>
                            </div>
                            <h5 className="font-bold text-xl mt-5 pb-2.5">Location</h5>
                            <p>East Gola Road, Patna, Bihar, India 801503</p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={3}>
                        <div className="bg-background rounded-md shadow-3xl pt-5 pb-7.5 px-7.5 text-center flex flex-col items-center ">
                            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green">
                                <span className="text-cream-foreground text-[28px]"><FaEnvelope /> </span>
                            </div>
                            <h5 className="font-bold text-xl mt-5 pb-2.5">Mail</h5>
                            <p><a href="mailto:hello@kidsworld.com">hello@kidsworld.com</a></p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={4}>
                        <div className="bg-background rounded-md shadow-3xl pt-5 pb-7.5 px-7.5 text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green">
                                <span className="text-cream-foreground text-[28px]"><FaPhone /> </span>
                            </div>
                            <h5 className="font-bold text-xl mt-5 pb-2.5">Contact</h5>
                            <p><a href="tel:+919525230232">+91 9525230232</a></p>
                        </div>
                    </SlideUp>

                </div>
            </div>
        </div>
    )
}

export default ContactAddress