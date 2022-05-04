import type { NextPage, GetStaticProps } from "next";
import type { ProductProps } from "lib/types";
import { getAllProducts } from "lib/db";
import { Container, Grid } from "components";

type Props = {
  products: ProductProps[];
};

const Home: NextPage<Props> = ({ products }) => {
  return (
    <Container title="Next.js with GraphCMS">
      <Grid products={products} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const products = (await getAllProducts()) || [];

  return {
    props: {
      products,
    },
  };
};

export default Home;
