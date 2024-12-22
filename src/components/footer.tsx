import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constant/footerlinks'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className='
      w-full 
       px-[24px] py-[48px] xsm:p-[80px] 
       text-center xsm:text-start
      flex 
      flex-col
      gap-[80px]'>
          {/* top div */}
          <div className='w-full 
          flex 
         flex-col xsm:flex-row 
          justify-between 
          items-center'>
            <div className=' w-[287px] xsm:w-auto gap-4  flex flex-col xsm:flex-row'>
                <p className='text-[18px] leading-[150%] font-semibold'>Subscribe to our newsletter</p>
                <p className='text-[16px] leading-[150%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>


            <div className='flex gap-4 flex-col mt-[24px] xsm:mt-0'>
              <div className='flex gap-4 flex-col xsm:flex-row'>
                <Input  placeholder='Enter you email' className='w-full xsm:w-[265px] h-[48px] border-black'/>
                <Button variant={"transparentbtn"} value={"Subscribe"} className='w-full xsm:w-auto'>Subscribe</Button>
            </div>
            <p>By subscribing you agree to with our Privacy Policy</p>
            </div>
          </div>
           {/* Middiv */}
          <div className='w-full flex  flex-col xsm:flex-row  gap-10'>
            <div className='xsm:w-[250px] h-[40px] inline-block xsm:block  m-auto xsm:m-0'>
              <Image src={"/logo.jpeg"} alt='logo' width={130} height={40}></Image>
            </div>
            {footerLinks.map((item,index)=>{
              return(
                <div className=' w-[250px] flex flex-col gap-4 m-auto xsm:text-start' key={index}>
            <h4 className='text-[16px] leading-[150%] font-semibold'>{item.heading}</h4>
            <ul   className='flex flex-col gap-2'>
             <li> <Link  href={"#!"}>{item.l1}</Link></li>
             <li> <Link  href={"#!"}>{item.l2}</Link></li>
             <li> <Link  href={"#!"}>{item.l3}</Link></li>
             <li> <Link  href={"#!"}>{item.l4}</Link></li>
             <li> <Link  href={"#!"}>{item.l5}</Link></li>
            </ul>
            </div>
              )
            })}
          </div>

          {/* bottomdiv */}
          <div className='w-full
           flex  
           flex-col xsm:flex-row
           justify-between 
           items-end 
          h-auto xsm:h-[57px] 
           border-t-[1px]
           pt-[32px] xsm:pt-0
           text-center'>
            <div className=' flex
            flex-col xsm:flex-row
            gap-[24px]'>
              <p>2023 Ddsgnr. All right reserved.</p>
            
           <div className=' flex gap-[24px]'> 
            <Link href={"#!"}>Privacy Policy</Link>
            <Link href={"#!"}>Terms of Service</Link>
            <Link href={"#!"}>Cookies Settings</Link>
            </div>
            
            </div>
            <div className='flex justify-center items-center gap-[12px] m-auto xsm:m-0 mt-[24px] xsm:mt-0'>
            <FaFacebookF  size={24}/>
            <FaInstagram size={24}/>
            <FaTwitter size={24}/>
            <FaLinkedin size={24}/>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer
