import React from 'react'
import { Button } from '@/components/ui/button'
import left_circle_1 from "@/assets/images/banner/left-circle-1.png"
import left_circle_2 from "@/assets/images/banner/left-circle-2.png"
import right_circle from "@/assets/images/banner/right-circle.png"
import shap from "@/assets/images/shapes/shap.png"
import { Link } from 'react-router-dom'
import ThreeLine from '@/assets/icons/threeLine'
import Title from '@/components/ui/title'

const HeroOne = () => {
  return (
    <section className="bg-warm pt-[78px] lg:mb-15 mb-10 relative">
      <div className="container relative">
        <div className="flex flex-col items-center text-center relative z-10">
          <Title size={"7.5xl"} className={"font-normal max-w-[776px]"}>
            <span className="relative">Exploring Minds <span className="absolute -left-6 top-1 text-3xl text-[#0A6375]"><ThreeLine /></span></span>
            <span className="font-bold">Elementary</span> <span className="font-bold text-destructive-foreground">School</span>
          </Title>

          <div className="flex absolute right-[87px] top-14 animate-skw">
            <img src={shap} alt="shap-2" className="w-7.5 h-12.5 relative top-9" />
            <img src={shap} alt="shap-1" />
            <img src={shap} alt="shap-2" className="w-5 h-8 -mt-7" />
          </div>

          <p className="pt-5 max-w-[431px]">Starting a corporate business typically involves several steps, such as develo a business</p>
          <div className="mt-6">
            <Button asChild variant={"secondary"} >
              <Link to="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="absolute left-2.5 lg:top-0 top-10 lg:max-w-full max-w-[200px] sm:block hidden animate-up-down">
          <img src="https://imagizer.imageshack.com/img922/3108/8iRYHO.png" alt="banner-img-1" />
        </div>

        <div className="absolute right-0 bottom-0 pb-[71px] lg:block hidden animate-up-down">
          <img src="https://imagizer.imageshack.com/img922/4946/ep4jYf.png" alt="banner-img-2" />
        </div>

        <div className="lg:pt-[72px]">
          <img src="https://imagizer.imageshack.com/img921/5530/xupkBX.png" alt="painting" />
        </div>
      </div>
      {/* <!-- circle shap --> */}
      <div className="lg:block hidden">
        <div className="absolute left-0 top-[60px] animate-left-right-2">
          <img src={left_circle_1} alt="img" />
        </div>
        <div className="absolute left-[37px] top-[186px] animate-left-right-2">
          <img src={left_circle_2} alt="img" />
        </div>
        <div className="absolute right-0 bottom-[165px] animate-up-down">
          <img src={right_circle} alt="img" />
        </div>
      </div>
      {/* <!-- circle shap --> */}
    </section>
  )
}

export default HeroOne