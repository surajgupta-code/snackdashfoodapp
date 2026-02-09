import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        
        {/* --- NEW: Developer Profile Section --- */}
        <div className="bg-red-50 border-l-4 border-red-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-red-800 md:text-3xl">Project Information</h2>
          <p className="text-gray-700 mb-4 italic">
            Note: This is a <strong>demo project</strong> created for portfolio purposes to showcase web development skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
            <div>
              <p><strong>Developed By:</strong> Suraj Gupta</p>
              <p><strong>Email:</strong> <a href="mailto:surajgupta31399@gmail.com" className="text-blue-600 hover:underline">surajgupta31399@gmail.com</a></p>
            </div>
            <div>
              <p><strong>Contact:</strong> +91 6393788605</p>
              <p><strong>Role:</strong> Full Stack Developer</p>
            </div>
          </div>
        </div>
        {/* -------------------------------------- */}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-red-800 md:text-4xl">About SnackDash</h2>
          <p className="text-lg text-gray-700 md:text-xl">
            SnackDash was founded in 2020 with a mission to make delicious and fresh food accessible to everyone.
            What started as a small local food delivery service has quickly grown into a beloved platform known for 
            its reliability and wide selection of cuisines.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-red-800 md:text-4xl">Our Services</h2>
          <p className="text-lg text-gray-700 mb-6 md:text-xl">
            At SnackDash, we are dedicated to providing the best food delivery service with a wide range of options.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 md:text-lg">
            <li>Fast and reliable food delivery</li>
            <li>Wide variety of cuisines to choose from</li>
            <li>Easy-to-use app and website for hassle-free ordering</li>
            <li>24/7 customer support to assist you with any queries</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-red-800 md:text-4xl">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-6 md:text-xl">
            SnackDash stands out because we prioritize customer satisfaction and quality above all else:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 md:text-lg">
            <li>Curated selection of top-rated restaurants</li>
            <li>Real-time order tracking and updates</li>
            <li>Secure payment options</li>
            <li>Environmentally friendly packaging</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-red-800 md:text-4xl">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6 md:text-xl">
            Our mission is to revolutionize the way you experience food delivery by committing to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 md:text-lg">
            <li>Supporting local restaurants and communities</li>
            <li>Promoting sustainable and eco-friendly practices</li>
            <li>Ensuring customer satisfaction with every order</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;