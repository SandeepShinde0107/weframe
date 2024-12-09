import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import RightContent from "./RightContent";

const Breadcrumb = () => {
  const images = [
    { src: "/table1.png", alt: "Table 1" },
    { src: "/table1.png", alt: "Table 2" },
    { src: "/table1.png", alt: "Table 3" },
    { src: "/table1.png", alt: "Table 4" },
  ];

  return (
    <div className="relative flex flex-col md:flex-row w-full h-auto px-4 gap-6 mt-5">
      {/* Left Content */}
      <div className="flex flex-col w-full md:w-2/3 gap-6 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 relative z-10">
        {/* Container for the machine image and small table images */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
          {/* Decorative Image (Machine) */}
          <div className="flex justify-center md:col-span-2">
            <Image
              src="/machine.png"
              alt="Decorative Image"
              width={552}
              height={400}
              className="w-full max-w-[552px] h-[400px] mix-blend-multiply rounded-lg shadow-md"
            />
          </div>

          {/* Table Images */}
          <div className="flex flex-wrap justify-center gap-4 z-20 md:col-span-2">
            {images.map((img, index) => (
              <div key={index} className="relative w-16 h-16">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={64}  // Adjust width
                  height={64} // Adjust height
                  className="object-contain rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-transform transform hover:scale-110 border border-gray-200"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Breadcrumb Section */}
        <nav className="flex items-center text-sm text-gray-600" aria-label="Breadcrumb">
          {/* Updated to remove <a> tag inside <Link> */}
          <Link href="/" className="hover:text-gray-800 transition duration-300 font-medium">
            Home
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="font-bold text-black">Art de la table</span>
        </nav>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/3 mt-6 md:mt-0">
        <RightContent />
      </div>
    </div>
  );
};

export default Breadcrumb;
