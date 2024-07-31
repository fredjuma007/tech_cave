"use client";

import Image from "next/image";

const stores = [
    {
      image: "/images/fulllogo.jpg",
      quote: "TechCave showed us to get started with a logo, what to do, and how to do it.",
      name: "Sparkle BookClub",
    },
    {
      image: "/images/greenceo_logo.jpg",
      quote:
        "We had no idea how to get started, but TechCave showed us the way. And we were able to create something amazing.",
      name: "GreenCEO",
    },
  
    {
      image: "/images/kipekee.jpg",
      quote:
        "The team at TechCave is amazing. They helped us create a stunning Logo that we are proud of.",
      name: "Kipekee",
    },
  ];

const WordpressWeb = () => {
    return (
        <section
          className=" mt-10 md:py-10 bg-[#648e99] w-full
        rounded-3xl
      
      "
        >
          <div className=" p-4   mx-auto relative z-10  w-full ">
            <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
              Logo designs <br /> that stand out
            </div>
    
            <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
              We create stunning logos that help you stand out. From logos to social media posts, we have you covered.
            </p>
            <div className="md:flex items-center justify-center  px-10 ">
              {stores.map((store, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
                >
                  <div className="flex flex-col items-center justify-center ">
                    <Image
                      src={store.image}
                      alt="shopify store"
                      width={400}
                      height={400}
                      className="rounded-lg mx-auto"
                    />
                    <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                      &quot;{store.quote}&quot;
                    </p>
                    <p className="text-neutral-800 font-bold text-lg mt-4">
                      {" "}
                      - {store.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
 
export default WordpressWeb;