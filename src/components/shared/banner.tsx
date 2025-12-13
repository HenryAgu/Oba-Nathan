import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
<section className="flex flex-col items-center my-24 text-center">
  <span className="text-lg lg:text-[22px] font-normal leading-none">
    Still confused. then,
  </span>

  <Link href="tel:+2349091748665" className="text-[47px] lg:text-[144px] font-normal tracking-tight leading-none hover:text-gray-500 transition duration-300 ease-in-out mt-3 lg:mt-0">
    Let&apos;s Talk
  </Link>

  <span className="text-lg lg:text-[22px] font-normal leading-20 mt-3">
    or send an email to
    <Link href="" className="underline">
      hello@thecssagency.com
    </Link>
  </span>
</section>

  )
}

export default Banner