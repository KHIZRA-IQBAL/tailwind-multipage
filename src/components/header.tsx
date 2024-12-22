import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { Button } from './ui/button';

const Header = () => {
  return (
    <>
         <header className='w-full flex flex-col gap-[16px]'>
          {/* topdiv */}
          <div className='w-full bg-headerColor h-[54px] px-[62px] xsm:flex justify-between items-center hidden border-b-[1px] border-[black]'>
            <div className='h-[30px] flex justify-center items-center gap-[16px] text-[14px] leading-[150%]'>
              <p>Phone Number: 956 742 4555 678</p>
              <div className='w-[1px] h-[30px] bg-[#676767]'></div>
              <p>Email:info@addsgns.com</p>
            </div>

            <div className='flex justify-center items-center gap-[12px]'>
            <FaFacebookF  size={24}/>
            <FaInstagram size={24}/>
            <FaTwitter size={24}/>
            <FaLinkedin size={24}/>
            </div>
          </div>



          {/* bottomdiv */}
          <div className='w-full h-[72px] bg-headerColor xsm:flex justify-between items-center xsm:px-[64px] py-[15px] px-[24px] border-b-[1px] border-[black] flex'>
            <Image src="/logo.jpeg" alt="logo" width={131} height={41}></Image> 
            <div className='xsm:flex justify-between items-center gap-[32px]  hidden'>
              <ul className='flex gap-[52px]
              justify-center items-center text-[16px]'>
               <li><Link href="/">Home</Link></li>
               <li><Link href="about">About Us</Link></li>
               <li><Link href="testimonial">Testimonial</Link></li>
              </ul>
              <div className='flex justify-center items-center gap-[16px]'>
                <Button variant={'transparentbtn'}>Login</Button>
                <Button>Sign Up</Button>
              </div>
            </div>
            <IoMenu size={24} className='xsm:hidden'/>
          </div>
         </header>
         
    </>
  )
}

export default Header
