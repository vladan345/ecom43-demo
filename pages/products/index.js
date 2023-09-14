import Head from "next/head";
import { ReactLenis } from "@studio-freight/react-lenis";
import ProductList from "@/components/ProductList";
import { getAllProducts } from "utils/shopify";

function Products({ products }) {
  return (
    <div>
      <Head>
        <title>Ecom43 | Shop</title>
        <meta name="description" content="Ecom43 shop page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <main className="py-20">
          <h1 className="mt-20 mb-16">Shop</h1>
          <ProductList products={products} />
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: { products },
  };
}

export default Products;
