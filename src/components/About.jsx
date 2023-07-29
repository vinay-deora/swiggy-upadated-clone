import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <div className="lg:flex items-center">
        <div className="lg:w-1/2">
          <img
            src="https://wallpapercave.com/dwp1x/wp9506296.jpg"
            alt="About"
            className="rounded-lg h-auto w-full lg:w-auto"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
          <h2 className="text-4xl font-bold mb-4">About Our Food App</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At FoodApp, we believe that food is not just about sustenance, but
            also about the joy it brings to our lives. We are passionate about
            delivering delicious, high-quality meals right to your doorstep.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team, led by Vinay Deora, has carefully curated each menu item, ensuring
            that you experience flavors that excite your taste buds. We source
            the finest ingredients to create memorable dining experiences for
            our customers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're craving a hearty breakfast, a quick lunch, or a
            gourmet dinner, FoodApp has you covered. With our user-friendly app
            and seamless ordering process, you can enjoy your favorite meals
            with just a few taps.
          </p>
          <h1 className='text-gray-700 leading-relaxed mb-4'> Website developed by Mr. Vinay Deora ,Reactjs Developer
          </h1>
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
