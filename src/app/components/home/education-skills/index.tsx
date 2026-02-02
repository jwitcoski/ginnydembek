"use client";
import Image from "next/image"
import { educationData } from "@/data/page-data";

const EducationSkills = () => {
    return (
        <section>
            <div className="border-t border-softGray overflow-hidden">
                <div className="container relative z-10">
                    <Image src={"/images/home/education-skill/edu-skill-vector.svg"} alt="vector" width={260} height={170} className="no-print absolute top-0 left-0 transform -translate-y-1/2" />
                    <div className="relative z-10 py-16 md:py-32">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
                            <h2>Education & Skills</h2>
                            <p className="text-xl text-orange-500">( 03 )</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
                            <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                                {educationData?.education?.map((value: any, index: any) => {
                                    return (
                                        <div key={index} className="flex items-start gap-6">
                                            <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                                                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                            </div>
                                            <div className="flex-1 flex flex-col gap-2">
                                                <h5>{value?.title}</h5>
                                                <p className="font-normal">{value?.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="w-full lg:max-w-md">
                                <h4 className="font-bold mb-4 text-black">Areas of Expertise</h4>
                                <div className="flex flex-wrap gap-3">
                                    {educationData?.skills?.map((value: any, index: any) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 border border-softGray rounded-full text-base font-normal text-black bg-white"
                                        >
                                            {value?.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationSkills