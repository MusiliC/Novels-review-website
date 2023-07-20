import Image from "next/image";
import aboutImage from "/public/3.jpg";

export default function RootLayout({ children }) {
  return (
    <section className="w-full pt-2 pb-16">
      <div className=" relative w-full  bg-gradient-to-br from-primary-100 to-[#3C2A21]  h-[300px]">
        <Image
          src={aboutImage}
          className="h-full w-full opacity-[70%] grayscale-[60%] mix-blend-overlay object-cover"
          alt="about"
        />

        <div className="  px-6 py-2 absolute bottom-[100px] rounded-lg left-[30px] md:left-[60px] lg:left-[100px]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold tracking-widest">
            Explore Novels and Books
          </p>
          <p className="text-white md:text-lg  tracking-wider leading-[18px] mt-4 md:mt-2">
            Not sure what to read next? Explore our catalogue of public books
          </p>
        </div>
      </div>
      {children}
    </section>
  );
}
