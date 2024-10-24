import Image from "next/image";

const About = () => {
    return (
        <div className="container mx-auto mt-16 mb-12 text-slate-950">
            <div className="grid grid-cols-1 lg:grid-cols-2 mr-20 ml-20">
                {/* Image Section */}
                <div className="relative">
                    <Image
                        alt="about"
                        src="/assets/images/about_us/person.jpg"
                        className="rounded-lg h-[250] "
                        height={300}
                        width={300}
                    />
                    <Image
                        alt="about"
                        src="/assets/images/about_us/parts.jpg"
                        className="rounded-lg absolute bottom-0 right-0 -translate-x-40 translate-y-2"
                        height={200}
                        width={200}
                    />
                </div>

                {/* Text Section */}
                <div>
                    <h2 className="text-red-600">About Us</h2>
                    <h3 className="text-2xl font-bold text-black">
                        We are qualified & have experience in this field
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default About;
