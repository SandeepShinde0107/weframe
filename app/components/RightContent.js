import Livraisons from "./Livraisons";

const RightContent = () => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-2 relative z-10">
      <h2 className="text-xl font-semibold text-blue-900">
        Cheese – appareil à raclette 1/2 roue
      </h2>
      <p className="text-gray-700 text-lg">39,50€ /pièce</p>
      <div className="flex gap-4">
        <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-black">
          20cm
        </button>
        <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-black">
          50cm
        </button>
      </div>
      <ul className="text-sm text-gray-600 list-disc pl-5">
        <li>Location appareil à raclette - Raclette traditionnelle 1/2 roue</li>
        <li>Réglable en hauteur</li>
        <li>Appareil à raclette professionnel</li>
        <li>Boîtier de chauffe horizontal réglable en hauteur</li>
        <li>220V</li>
        <li>900W</li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="p-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          Ajouter au panier
        </button>
        <span className="font-medium">1</span>
        <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-black">
          +
        </button>
        <button className="p-2  bg-gray-200 hover:bg-gray-300 rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-black">
          -
        </button>
      </div>
      <Livraisons/>
    </div>
    
  );
};

export default RightContent;
