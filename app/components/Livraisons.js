const Livraisons = () => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
        {/* Livraisons Section */}
        <div className="flex justify-between items-center mb-4 border-b pb-2 border-gray-200">
          <h4 className="text-gray-800 font-semibold text-sm">LIVRAISONS</h4>
          <button
            className="text-gray-600 text-xl hover:text-gray-800 focus:outline-none"
            aria-label="Expand"
          >
            +
          </button>
        </div>
  
        {/* Questions Section */}
        <div className="flex justify-between items-center mt-4">
          <h4 className="text-gray-800 font-semibold text-sm">QUESTIONS</h4>
          <button
            className="text-gray-600 text-xl hover:text-gray-800 focus:outline-none"
            aria-label="Expand"
          >
            +
          </button>
        </div>
      </div>
    );
  };
  
  export default Livraisons;
  