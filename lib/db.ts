import type { ProductProps } from "lib/types";
import { graphcmsClient } from "lib/graphcms";
import { gql } from "graphql-request";

export const getAllProducts = async (): Promise<ProductProps[]> => {
  const query = gql`
    {
      products {
        id
        name
        price
        slug
        image {
          url
          width
          height
        }
      }
    }
  `;

  const { products } = await graphcmsClient.request(query);

  return JSON.parse(JSON.stringify(products));
};

export const getProductBySlug = async (
  slug: string
): Promise<ProductProps | null> => {
  const query = gql`
    query PageProduct($slug: String) {
      product(where: { slug: $slug }) {
        name
        price
        description {
          raw
        }
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  const { product } = await graphcmsClient.request(query, variables);

  if (!product) {
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};

export const getAllProductsSlug = async (): Promise<ProductProps[]> => {
  const query = gql`
    {
      products {
        slug
      }
    }
  `;

  const { products } = await graphcmsClient.request(query);

  return JSON.parse(JSON.stringify(products));
};
