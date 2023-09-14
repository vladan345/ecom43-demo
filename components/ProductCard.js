import React from "react";
import Link from "next/link";
import Image from "next/image";

function ProductCard(props) {
  return (
    <Link
      href={`/products/${props.product.handle}`}
      className={`bg-transparent rounded-[--radius] border-2 border-[--text] transition duration-500 hover:border-[--accent] hover:text-[--accent] flex flex-col justify-between w-full ${props.customClass}`}
    >
      <div
        className={`${
          props.largeImage ? "tablet:h-5/6" : "h-[300px]"
        } relative min-h-[300px]`}
      >
        <Image
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              25vw"
          alt={props.product.images.edges[0].node.altText}
          src={props.product.images.edges[0].node.url}
          priority
          className="object-contain"
        />
      </div>
      <div className="flex flex-col px-5 py-7">
        <h2 className="text-base">{props.product.title}</h2>
        <p className="text-base">
          {props.product.priceRange.minVariantPrice.amount}{" "}
          {props.product.priceRange.minVariantPrice.currencyCode}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
