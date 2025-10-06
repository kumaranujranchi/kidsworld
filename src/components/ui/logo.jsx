import React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

// External logo URL
const LOGO_URL = 'https://imagizer.imageshack.com/img923/7332/4irBLH.png'

const Logo = ({ className, textClassName }) => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={LOGO_URL} alt="Kids World logo" className={cn("h-10 lg:h-11 xl:h-12 w-auto max-w-[160px] object-contain", className)} />
      <span className={cn("hidden sm:inline text-base lg:text-lg font-bold font-jost leading-tight", textClassName)}>Kids World</span>
    </Link>
  )
}

export default Logo