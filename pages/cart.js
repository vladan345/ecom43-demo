import { useContext, useEffect, useState } from "react";
import { CartContext } from "context/shopContext";
import Link from "next/link";
import CartProduct from "@/components/CartProduct";
import { ReactLenis } from "@studio-freight/react-lenis";

Cart.title = "Ecom43 | Cart";

export default function Cart() {
  const { checkoutUrl, cart } = useContext(CartContext);

  let cartTotal = 0;
  let shippingPlaceholder = 300;

  return (
    <>
      <div className="py-40">
        <div className="wrapper">
          <h1 className="mb-10">Shopping Cart</h1>
          <div className="flex gap-8 relative flex-col tablet:flex-row">
            <div className="tablet:w-3/6 laptop:w-4/6 w-full">
              {cart.length != 0 ? (
                cart.toReversed().map((item) => {
                  cartTotal += parseFloat(
                    item.variantPrice * item.variantQuantity
                  );
                  return <CartProduct item={item} key={item.id} />;
                })
              ) : (
                <div>
                  <h2 className="mt-16">No products in your cart :(</h2>
                  <Link
                    className=" mt-8 py-3 link border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-500 w-1/2 inline-block text-center"
                    href="/products"
                  >
                    Shop
                  </Link>
                </div>
              )}
            </div>
            {cart.length != 0 ? (
              <div className="tablet:w-3/6 laptop:w-2/6 w-full mt-8 sticky top-[109px] right-0 h-[350px]">
                <div className="border-2 border-black rounded-[--radius] p-8 flex flex-col justify-between h-[263px]">
                  <div className="flex justify-between items-center">
                    <h3>Cart Total</h3>
                    <p>{cartTotal}.0 RSD</p>
                  </div>
                  <div className="flex  justify-between items-center">
                    <h3>Shipping</h3>
                    <p>{shippingPlaceholder}.0 RSD</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <h3>Total</h3>
                    <p>{cartTotal + shippingPlaceholder}.0 RSD</p>
                  </div>
                </div>
                <Link
                  className="mt-8 py-3 link border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-500 w-full inline-block text-center"
                  href={checkoutUrl}
                >
                  checkout
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
