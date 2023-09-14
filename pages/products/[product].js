import Head from "next/head";
import { getProduct } from "utils/shopify";
import ProductDetails from "@/components/ProductDetails";
import { ReactLenis } from "@studio-freight/react-lenis";

function Product({ productData }) {
  return (
    <>
      <Head>
        <title>{productData.title}</title>
      </Head>

      <div className="ProductPage tablet:py-40 py-28">
        <ProductDetails productData={productData} />
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { product } = context.query;

  const productData = await getProduct(product);
  return {
    props: {
      productData,
    },
  };
};

export default Product;
