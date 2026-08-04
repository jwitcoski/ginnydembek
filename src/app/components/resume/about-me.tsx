import Image from "next/image";

const AboutMe = () => {
    return (
        <section id="about">
            <div className="relative bg-softGray py-10 md:py-32">
                <div className="absolute top-0 w-full px-9">
                    <Image
                        src="/images/home/about-me/resume-bg-img.svg"
                        alt="resume-bg-img"
                        width={1200}
                        height={348}
                        className="w-full"
                    />
                </div>

                <div className="relative z-10">
                    <div className="container">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
                            <h2>About Me</h2>
                            <p className="text-xl text-primary">( 01 )</p>
                        </div>

                        <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
                            <div className="w-[303px] h-[440px] hidden lg:flex">
                                <Image
                                    src="/images/about-photo.png"
                                    alt="Ginny Dembek"
                                    width={303}
                                    height={440}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="w-full lg:max-w-2xl flex-1">
                                <p className="mb-4">
                                    The foundation of my research, teaching, and service is built on three generations of knowledge
                                    advocating for higher expectations and equity for students with special needs. I am dedicated to
                                    focusing on individual outcomes and ensuring that teacher candidates are prepared to be advocates
                                    for their students.
                                </p>
                                <p className="mb-4">
                                    <strong>Research Focus:</strong> My research agenda centers on intervention research—helping teachers
                                    apply work in the field with high validity. I focus on problem solving in literacy, literacy instruction
                                    and tutoring, writing instruction, and enhancing teacher preparation with Universal Design for Learning.
                                </p>
                                <p>
                                    <strong>Teaching Philosophy:</strong> I maintain high standards for teacher candidates and mastery of
                                    knowledge related to student/civil rights and teaching as a science. Reflective application of skills,
                                    evidence-based interventions, and ongoing mentorship are built into my courses and student engagement.
                                </p>

                                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                                    {[
                                        { count: "10+", label: "Years at Brooklyn College" },
                                        { count: "6+", label: "Peer-Reviewed Publications" },
                                        { count: "30+", label: "Conference Presentations" },
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <h3>{item.count}</h3>
                                            <p className="text-base md:text-lg text-black">{item.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                                    <div className="flex items-center gap-3.5">
                                        <Image
                                            src="/images/icon/lang-icon.svg"
                                            alt="lang-icon"
                                            width={30}
                                            height={30}
                                        />
                                        <p className="text-base xl:text-xl text-black">Research Focus</p>
                                    </div>
                                    <div className="flex flex-wrap justify-center items-center gap-2.5">
                                        {["Problem Solving", "Literacy Instruction", "Writing", "UDL"].map((area) => (
                                            <p
                                                key={area}
                                                className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                                            >
                                                {area}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
