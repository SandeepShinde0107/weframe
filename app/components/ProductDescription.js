const ProductDescription = () => {
  return (
    <div className=" mt-4 w-full bg-gray-50 mx-4 p-4 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      <h3 className="text-lg font-semibold text-blue-900">
        Description produit
      </h3>
      <p className="text-gray-600 mt-2">
        Festi vous propose à la location un/une{" "}
        <span className="font-medium">&quot;Jewel – grand couteau/10pc&quot;</span> pour
        votre événement et ce dès <strong>0,35 € / pièce (HTVA)</strong>. Que ce
        soit pour votre mariage, une fête d&apos;anniversaire ou du personnel, ce
        produit a fait l&apos;objet d&apos;une sélection rigoureuse par notre équipe. Il
        est en location chez nous sous la référence{" "}
        <span className="font-medium">&quot;VAJGC&quot;</span>. Nous sommes à votre
        disposition pour que les événements de nos clients, même en
        last-minute, soient toujours une réussite. Vous pourrez trouver toute une
        série d&apos;autres produits à louer de ce type dans la catégorie{" "}
        <span className="font-medium">&quot;Art de la Table&quot;</span>.
      </p>
    </div>
  );
};

export default ProductDescription;
