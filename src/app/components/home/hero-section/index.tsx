import Image from "next/image"

const index = () => {
    return (
        <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
            <div className="container">
                <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
                    <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
                        <div>
                            <h1>I&apos;m Ginny Dembek</h1>
                            <h1>Researcher / Educator / Consultant / Advocate</h1>
                        </div>
                        <p className="text-secondary font-normal max-w-md xl:max-w-xl">As a third generation Special Educator, I am committed to improving the lives of students with disabilities and increasing their success and inclusion in the general education classroom.</p>
                    </div>
                    <Image src={"/images/headshot1.jpeg"} alt="Ginny Dembek" width={685} height={650} className="block lg:hidden object-cover rounded-lg" />
                </div>
            </div>
            <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
                <Image src={"/images/headshot1.jpeg"} alt="Ginny Dembek" width={685} height={650} className="absolute right-0 top-0 z-1 object-cover rounded-lg" />
            </div>
        </section>
    )
}

export default index