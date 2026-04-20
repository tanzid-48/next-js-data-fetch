import Image from "next/image";
import React from "react";

const ProductsCard = ({ product }) => {
  const { id, name, category, price, stock, image } = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
       <Image
         src={image}
         alt={name}
         width={220}
         height={120}
         >        
       </Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {name}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        
        <div className="card-actions justify-end">
          <div className="badge badge-outline">${price}</div>
          <div className="badge badge-outline">stock:{stock}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
