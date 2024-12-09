import Image from 'next/image';
const RelatedProducts = () => {
    const products = [
      { id: 1, title: "Title", price: "100€", image: "/table1.png", pieces: "20 pièces" },
      { id: 2, title: "Title", price: "100€", image: "/table1.png", pieces: "20 pièces" },
      { id: 3, title: "Title", price: "100€", image: "/table1.png", pieces: "20 pièces" },
      { id: 4, title: "Title", price: "100€", image: "/table1.png", pieces: "20 pièces" },
    ];
  
    return (
      <div className="mt-12">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className=" mx-5 text-lg font-bold text-gray-800">Articles Similaires</h2>
          <a
            href="#"
            className=" m-3 text-sm font-medium text-blue-600 hover:underline transition"
          >
            VOIR TOUTE LA COLLECTION
          </a>
        </div>
  
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-lg h-48 flex items-center justify-center bg-gray-100">
              <Image
                src={product.image}        // The source of the image (ensure this is a valid path)
                alt={product.title}        // Alt text for accessibility
                width={500}                 // Set an appropriate width (can be dynamic or static)
                height={200}                // Set an appropriate height (can be dynamic or static)
                className="w-full h-40 object-contain rounded-t-lg" // Tailwind classes for styling
              />
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
                  aria-label="Add to favorites"
                >
                  ♥
                </button>
                <span className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded">
                  ART DE LA TABLE
                </span>
              </div>
  
              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-sm">{product.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-gray-800">{product.price}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {product.pieces}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mt-1">0,35€/Pièce · Réf : VABGN5</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RelatedProducts;
  