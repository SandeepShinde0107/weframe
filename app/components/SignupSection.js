import Image from 'next/image';

const SignupSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-pink-50 rounded-lg p-6 md:p-12 shadow-md">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden">
        <Image
          src="/sofa.png" // Replace with the actual path to your image
          alt="Sofa Image"
          width={500}       // Specify the width for the image
          height={500}      // Specify the height for the image
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-800">
          S&apos;inscrire & économiser <span className="text-blue-500">10%</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn&apos;t. Yet busy any meeting shark
          light marginalised 4-blocker message.
        </p>

        {/* Signup Form */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="john@doe.com"
            className="flex-grow w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            S&apos;INSCRIRE &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
