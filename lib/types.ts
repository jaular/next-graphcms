import type { ElementNode } from "@graphcms/rich-text-types";

export type Content = {
  raw: {
    children: ElementNode[];
  };
};

export type ProductProps = {
  id: string;
  name: string;
  description: Content;
  price: number;
  slug: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
};
