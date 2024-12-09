import Image from 'next/image';

const TakeCareSection = () => {
  const services = [
    {
      id: 1,
      icon: "/delivery.png", // Replace with actual icon paths
      title: "Livraison & Reprise",
      description: "Selon vos besoins",
    },
    {
      id: 2,
      icon: "/cleaning.png",
      title: "Nettoyage",
      description: "Selon vos besoins",
    },
    {
      id: 3,
      icon: "/shopping.png",
      title: "Commande Illimitée",
      description: "Tout est possible",
    },
    {
      id: 4,
      icon: "/transport.png",
      title: "Transport & Enlèvement",
      description: "On s&apos;occupe de tout", // Corrected the unescaped apostrophe
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          On s&apos;occupe de <span className="text-blue-600">tout</span> {/* Corrected the unescaped apostrophe */}
        </h2>
        <p className="text-gray-500 mt-2">
          Office Ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-24 h-24 mb-6 bg-gray-200 rounded-full shadow-md flex justify-center items-center transform group-hover:scale-110 transition-transform duration-300">
              {/* Using Next.js <Image /> component */}
              <Image
                src={service.icon}
                alt={service.title}
                width={64} // Set width and height to maintain aspect ratio
                height={64}
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              {service.title}
            </h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TakeCareSection;
