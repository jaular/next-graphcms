import type { ProductProps } from "lib/types";
import type { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Container, Article } from "components";
import { getAllProductsSlug, getProductBySlug } from "lib/db";

type Props = {
  product: ProductProps;
};

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <Container title={product.name}>
      <Article title={product.name} content={product.description} />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await getAllProductsSlug();

  const paths = result.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
