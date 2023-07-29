import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Us
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="bg-gray-200">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14163.091497441546!2d73.3175469959274!3d28.022933804452466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917a5f0d6c4ddab%3A0x4ab8f8a60b43756f!2sBikaner%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1628005248224!5m2!1sen!2sus"
              className="w-full h-96"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
