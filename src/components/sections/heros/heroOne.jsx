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
    <section className="bg-warm md:pt-[78px] pt-20 lg:mb-15 mb-8 relative overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col items-center text-center relative z-10">
          <Title size={"7.5xl"} className={"font-normal max-w-[776px] px-4 sm:px-0 tracking-tight leading-[1.15]"}>
            <span className="relative block">Exploring Minds <span className="absolute -left-6 top-1 text-3xl text-[#0A6375]"><ThreeLine /></span></span>
            <span className="font-bold block sm:inline">Elementary</span> <span className="font-bold text-destructive-foreground block sm:inline">School</span>
          </Title>

          <div className="md:flex hidden absolute md:right-[87px] md:top-14 right-3 top-3 animate-skw">
            <img src={shap} alt="shap-2" className="w-7.5 h-12.5 relative top-9" />
            <img src={shap} alt="shap-1" />
            <img src={shap} alt="shap-2" className="w-5 h-8 -mt-7" />
          </div>

          <p className="pt-4 sm:pt-5 max-w-[431px] w-full px-6 sm:px-0 text-muted-foreground text-sm sm:text-base leading-relaxed mx-auto">Starting a corporate business typically involves several steps, such as developing a business</p>
          <div className="mt-6 w-full px-6 sm:px-0 flex justify-center">
            <Button asChild size="lg" variant={"secondary"} className="w-full max-w-[200px] sm:max-w-none sm:w-auto">
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

        <div className="lg:pt-[72px] mt-6 sm:mt-10">
          <img src="https://imagizer.imageshack.com/img921/5530/xupkBX.png" alt="painting" className="w-full max-w-[520px] sm:max-w-[680px] mx-auto" />
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