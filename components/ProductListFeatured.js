import React from "react";
import ProductCard from "./ProductCard";

function ProductListFeatured(props) {
  return (
    <div className="gap-7 tablet:grid-cols-4 tablet:grid-rows-2 grid grid-cols-1 w-full max-w-7xl">
      {props.products.map((product, index) => {
        if (index < 5) {
          return index === 0 ? (
            <ProductCard
              product={product.node}
              key={product.node.id}
              customClass="tablet:col-span-2 row-span-2"
              largeImage={true}
            />
          ) : (
            <ProductCard product={product.node} key={product.node.id} />
          );
        }
      })}
    </div>
  );
}

export default ProductListFeatured;
