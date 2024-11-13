import Image from "next/image"
import React from "react"
import Apple from "../../../public/Apple.png";
import Microsoft from "../../../public/microsoft.png";
import Logo2 from "../../../public/Logo2.png";
import Google from "../../../public/google.png";
export default function Sponsors(){
    return(
        <>
        <section className="w-[1920px] h-[538px] ml-[1px] py-[140px] px-[220px] bg-white border-2px border-red-500  border-2px flex  flex-col items-center gap-[100px] text-black">

            <h1 className="w-[1482px] h-[87px] text-7xl font-bold leading-[87.14px] tracking-[-2%] text-center" >Our sponsors</h1>
            <div className="w-[1482px] h-[71px] flex items-center justify-between gap-4px">
                <Image width={55.47} height={68} src={Apple} alt=""></Image>
                <Image width={287} height={62} src={Microsoft} alt=""></Image>
                <Image width={280} height={71} src={Logo2} alt=""></Image>
                <Image width={211} height={69.8} src={Google} alt=""></Image>
                
            </div>
        </section>
        </>
    )
}