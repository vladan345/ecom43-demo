import { useContext } from "react";
import Image from "next/image";
import { CartContext } from "context/shopContext";

function CartProduct({ item }) {
  const properties = Object.keys(item.options);
  const { removeCartItem } = useContext(CartContext);

  return (
    <div className="CartProduct my-8">
      <div className="relative flex flex-col laptop:flex-row py-8 border-2 border-black rounded-[--radius]">
        <Image
          className="cursor-pointer hover:opacity-20 transition duration-500 absolute right-4 top-4"
          src="/images/close.svg"
          alt="remove icon"
          width={20}
          height={20}
          onClick={() => removeCartItem(item.id)}
        />
        <div className="relative h-auto laptop:w-72 min-h-[200px] ">
          <Image
            src={item.image}
            alt={item.altText}
            fill
            className="object-contain"
            priority
            sizes="33vw"
          />
        </div>
        <div className="px-8 mt-4">
          <h3 className="mb-4">{item.title}</h3>
          <div className="grid grid-cols-2 grid-rows-2 laptop:gap-8 gap-4">
            {properties &&
              properties.map((property) => {
                const value = item.options[property];
                return (
                  <div key={property}>
                    <h6>{property}</h6>
                    <p>{value}</p>
                  </div>
                );
              })}

            <div>
              <h6>Quantity</h6>
              <p>
                {item.variantQuantity} x {item.variantPrice} {item.currencyCode}
              </p>
            </div>
            <div>
              <h6>Price</h6>
              <p>
                {item.variantPrice * item.variantQuantity}.0 {item.currencyCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
