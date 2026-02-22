import { products } from "@/lib/products";
import ProductDetailsClient from "./ProductDetailsClient";
import type { Metadata } from "next";

type ProductPageProps = {
  params: { slug: string };
};

export const generateStaticParams = async () =>
  products.map((product) => ({ slug: product.slug }));

export const generateMetadata = ({ params }: ProductPageProps): Metadata => {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return {
      title: "محصول پیدا نشد | EverBloom",
      description: "این محصول در حال حاضر موجود نیست.",
    };
  }
  return {
    title: `${product.title} | EverBloom`,
    description: product.shortDescription,
  };
};

const ProductDetailsPage = ({ params }: ProductPageProps) => {
  const product = products.find((item) => item.slug === params.slug) ?? null;
  return <ProductDetailsClient product={product} />;
};

export default ProductDetailsPage;
