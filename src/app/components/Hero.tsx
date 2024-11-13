import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Logo1 from "../../../public/Logo1.png";
export default function Her0() {

  return (
    <>
    <section className='py-[140px] px-[220px] top-[92px] bg-[#043873] text-[#FFFFFF] '>
            
            <div className='w-[656px] h-[361px]'>
            <div className='w-[656px] h-[238px]'>
                <h2 className='font-bold text-[64px] leading-[77.45px] tracking-[0.02em] mb-6'>Get More Done with whitepace</h2>  
                <p className='font-normal text-lg leading-[30px] tracking-[0.02em] mb-10'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
         
          <div className='w-[159px] h-[23px]'>
            <button className=' bg-blue-600 font-normal text-white px-3 py-4'>Try whitespace free</button>
          </div>
          {/* box div */}
        <div className=" w-[824px] h-[500px] gap-1 bg-[#C4DEFD] ml-[650px] -mt-96" ></div>
</div>
</div>
</section>
          {/*Project Management part*/}
 
 <section className="w-[1920px] h-[1588px] ml-[1px] py-[140px] px-[220px]  bg-white flex  text-black ">
         <div className="w-[672px] h-[411px] gap-[60px]  flex flex-col justify-between">
        
          <div className=" flex flex-col flex-nowrap items-center w-[656px] h-[238px] gap-6">
            <h2 className=" w-[672px] h-[174px] text-[72px] font-bold leading-[87.14px] tracking-[-2%]">
              Project  Management
            </h2>
            <p className='w-[672px] h-[90px] font-normal leading-[30px] tracking-[-2%]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
             
            </div>
            <div className='w-[159px] h-[58px] rounded-md bg-[#4F9CF9] flex items-center px-8 py-4
            gap-[10px] hover:text-[#FFFFFF] hover:border-white hover:border-2  '>
              <button className='text-[18px] font-medium leading-[23px] tracking-[-2%] text-white'>Get Started</button>
            </div>
            </div>
          
           {/* box div */}
        <div className=" w-[748px] h-[547px] gap-1 bg-[#C4DEFD]"></div>
        
       
    </section>

    {/*Work Together*/}

      <section className="w-[1480px] h-[661px] flex items-center gap-[100px] mb-96">
        <div className="flex-1 bg-white">
          <Image src={Logo1} alt="" width={710} height={661}></Image>
        </div>
        <div className="flex-1 w-[670px] h-[661px] flex flex-col items-start justify-center gap-6">
          <div className="w-[670px] h-[294px]">
            <h1 className="w-[670] h-[87px] text-7xl font-bold leading-[87.14px] tracking-[-2%]">Work together</h1>
            <p className="w-[670px] h-[60px] text-lg font-normal leading-[30px] tracking-[-2%] mt-20">With whitepace, share your notes with your colleagues and collaborate on them.
                You can also publish a note to the internet and share the URL with others.</p>
          </div>
          <div className="w-[186px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] hover:bg-[#043873] hover:text-[#4F9CF9] hover:border-white hover:border-2">
            <button className="w-[82px] h-[23px] text-lg font-medium leading-[23px] tracking-[-2%] flex items-center justify-center text-white">Try it now</button>
          </div>
        </div>
           

      

    </section>

{/* Extension section */}
<section className="w-[1921px] h-[759px] top-[2509px] ml-[1px] py-[140px] px-[220px] bg-[#043873] flex items-center gap-[98px] text-white m-24">
        <div className="w-[697px] h-[294px] gap-[60px] flex flex-col ">
          <div className=" flex flex-col flex-nowrap items-center w-[686px] h-[479px] gap-1 ">
            <h2 className=" w-[697px] h-[87px] text-[61px] font-bold leading-[87.14px] tracking-[-0.2%]">
            Use as Extension
            </h2>
            <p className="w-[697px] h-[60px] font-normal leading-[30px] tracking-[-2%]">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

            </p>
          </div>
          <div>
            <button className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] gap-[10px] text-[18px] font-medium leading-[23px] tracking-[-2%] hover:bg-[#043873] hover:text-[#4F9CF9] hover:border-white hover:border-2">
            Let’s Go
            </button>
          </div>
        </div>

        {/* box div */}
        <div className=" w-[686px] h-[479px] gap-1 bg-[#C4DEFD]"></div>
      </section>

 {/* customize section */}
 <section className="w-[1921px] h-[812.09px]  ml-[1px] py-[140px] px-[220px] flex  flex-row-reverse items-center gap-[98px] text-black">
        <div className="w-[714px] h-[532.09px] gap-10 flex flex-col">
          <div className=" flex flex-col flex-nowrap items-center w-[669px] h-[388px] gap-6">
            <h2 className=" w-[669px] h-174px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] m-12
            ">
            Customise it to your needs
            </h2>
            <p className="w-[669px] h-[90px] font-normal leading-[30px] tracking-[-2%]">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.

            </p>
          </div>
          <div>
            <button className="w-[171px] h-[63px] rounded-lg py-5 px-5 bg-[#4F9CF9] gap-[10px] text-[18px] font-medium leading-[23px] tracking-[-2%] text-white hover:bg-[#043873] hover:text-[#4F9CF9] hover:border-white hover:border-2">
            Let’s Go-
            </button>
          </div>
        </div>

        {/* box div */}
        <div className=" w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]"></div>
</section>



</>
  )
}