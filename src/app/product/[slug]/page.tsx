import { products } from "@/lib/products";
import ProductDetailsClient from "./ProductDetailsClient";
import type { Metadata } from "next";

type ProductPageProps = {
  // Match Next's generated PageProps typing: params is a Promise<SegmentParams>.
  params?: Promise<{ slug: string }>;
  searchParams?: any;
};

export const generateStaticParams = async () =>
  products.map((product) => ({ slug: product.slug }));

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => {
  const maybeParams = params as unknown;
  const resolved = typeof (maybeParams as any)?.then === 'function' ? await (maybeParams as any) : maybeParams;
  const resolvedParams = (resolved || {}) as { slug?: string };
  const slug = resolvedParams.slug;
  const product = products.find((item) => item.slug === slug);
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

const ProductDetailsPage = async ({ params }: ProductPageProps) => {
  const maybeParams = params as unknown;
  const resolved = typeof (maybeParams as any)?.then === 'function' ? await (maybeParams as any) : maybeParams;
  const resolvedParams = (resolved || {}) as { slug?: string };
  const slug = resolvedParams.slug;
  const product = products.find((item) => item.slug === slug) ?? null;
  return <ProductDetailsClient product={product} />;
};

export default ProductDetailsPage;
