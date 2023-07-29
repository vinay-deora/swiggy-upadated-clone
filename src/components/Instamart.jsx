// import { useState } from "react"

// const Section =({title, description})=>{
//     const [isVisible , setIsVisible]=useState(false)
// return(
//     <>
//     <h2 className="font-serif text-lg pl-3 underline ">{title}</h2>

//     {
//         isVisible ? (<button onClick={()=>{setIsVisible(false)}}>hide</button>) :( <button onClick={()=>{setIsVisible(true)}}>show</button>)
//     }

//     {isVisible && <p>{description}</p>}
//     </>
// )
// }

// const Instamart=()=>{
//     return(
//     <>
//   <h1 className="font-bold p-3 m-3 text-center text-3xl">InstaMart</h1>
//   <Section
//   title={"InstaMart"}
//   description={"Students have a lot of questions when it comes to writing a paragraph: How many sentences should you use? How do you transition within a paragraph? When do you end a paragraph? Etc. Below we explain everything you need to know about paragraph structure to write like an expert, including several paragraph examples. "}

//   />
//   <Section
//   title={"InstaMart"}
//   description={"Students have a lot of questions when it comes to writing a paragraph: How many sentences should you use? How do you transition within a paragraph? When do you end a paragraph? Etc. Below we explain everything you need to know about paragraph structure to write like an expert, including several paragraph examples. "}

//   />
//     </>
//     )

// }
// export default Instamart;

import React from "react";

const Instamart = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <img
              src="https://wallpapercave.com/wp/wp9319096.jpg"
              alt="Instamart"
              className="rounded-lg h-auto w-full lg:w-auto"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold mb-4">Welcome to Instamart</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shop for groceries from the comfort of your own home with
              Instamart. We offer a wide selection of fresh produce, pantry
              staples, snacks, beverages, and more.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our dedicated team works tirelessly to ensure that you receive the
              highest quality products delivered right to your doorstep. With
              our easy-to-use app and speedy delivery, grocery shopping has
              never been more convenient.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Discover the joy of hassle-free grocery shopping with Instamart
              and experience the ultimate convenience.
            </p>
            <a
              href="/shop"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instamart;
