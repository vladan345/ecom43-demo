import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "context/shopContext";

function MiniCart({ type }) {
  const { cart, cartOpen, setCartOpen, checkoutUrl, removeCartItem } =
    useContext(CartContext);

  return type == "sidecart" ? (
    <div
      className={` ${
        cartOpen
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-all duration-500 z-[10001] relative`}
    >
      <div
        className="w-screen h-screen bg-black opacity-20 fixed top-0 left-0"
        onClick={() => setCartOpen(false)}
      ></div>
      <div
        className={` fixed right-0 tablet:h-[100vh] h-[100vh] top-0 bg-white tablet:w-96 w-full p-8 pt-12 `}
      >
        <Image
          className="absolute right-3 top-3"
          src="/images/close.svg"
          alt="Close cart"
          width={20}
          height={20}
          data-cursor="pointer"
          onClick={() => setCartOpen(false)}
        />
        <div>
          {cart.length != 0 ? (
            <>
              <div className="max-h-[80vh] overflow-y-auto pr-4 h-auto">
                {cart.toReversed().map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex border-b-2 border-gray-200 py-4"
                      as={"image"}
                    >
                      <Image
                        className="mr-2 cursor-pointer hover:opacity-20 transition duration-500"
                        src="/images/close.svg"
                        alt="remove icon"
                        width={10}
                        height={10}
                        onClick={() => removeCartItem(item.id)}
                      />
                      <Image
                        src={item.image}
                        alt={item.altText}
                        width={70}
                        height={70}
                      />
                      <div>
                        <h4 className="text-sm mb-1">
                          {item.title} ({item.variantTitle})
                        </h4>
                        <p className="text-sm">
                          {item.variantPrice} {item.currencyCode} x{" "}
                          {item.variantQuantity}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4">
                <Link
                  className="mt-4 py-3 link border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-500 w-1/2 inline-block text-center"
                  href={checkoutUrl}
                >
                  checkout
                </Link>
                <Link
                  onClick={() => setCartOpen(false)}
                  className="mt-4 py-3 link border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-500 w-1/2 inline-block text-center"
                  href="/cart"
                >
                  view cart
                </Link>
              </div>
            </>
          ) : (
            <h5>No products in the cart :(</h5>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div
      className={` ${
        cartOpen
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition duration-500`}
    >
      <div
        className="w-screen h-screen bg-transparent fixed top-0 left-0"
        onClick={() => setCartOpen(false)}
      ></div>
      <div
        className={` absolute tablet:right-4 right-0 tablet:h-auto h-[100vh] bottom-[-14px] bg-white tablet:w-96 w-full translate-y-full p-8 pt-12 rounded-[--radius]`}
      >
        <Image
          className="absolute right-3 top-3"
          src="/images/close.svg"
          alt="Close cart"
          width={20}
          height={20}
          data-cursor="pointer"
          onClick={() => setCartOpen(false)}
        />
        <div>
          {cart.length != 0 ? (
            <>
              <div className="max-h-[50vh] overflow-y-auto pr-4 h-auto">
                {cart.toReversed().map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex border-b-2 border-gray-200 py-4"
                      as={"image"}
                    >
                      <Image
                        className="mr-2 cursor-pointer hover:opacity-20 transition duration-500"
                        src="/images/close.svg"
                        alt="remove icon"
                        width={10}
                        height={10}
                        onClick={() => removeCartItem(item.id)}
                      />
                      <Image
                        src={item.image}
                        alt={item.altText}
                        width={70}
                        height={70}
                      />
                      <div>
                        <h4 className="text-sm mb-1">
                          {item.title} ({item.variantTitle})
                        </h4>
                        <p className="text-sm">
                          {item.variantPrice} {item.currencyCode} x{" "}
                          {item.variantQuantity}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4">
                <Link
                  className="mt-4 py-3 link border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-500 w-1/2 inline-block text-center"
                  href={checkoutUrl}
                >
                  checkout
                </Link>
                <Link
                  onClick={() => setCartOpen(false)}
                  className="mt-4 py-3 link border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-500 w-1/2 inline-block text-center"
                  href="/cart"
                >
                  view cart
                </Link>
              </div>
            </>
          ) : (
            <h5>No products in the cart :(</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default MiniCart;
