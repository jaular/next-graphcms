import type { ProductProps } from "lib/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  products: ProductProps[];
};

export const Grid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <Link key={product.slug} href={`/product/${product.slug}`}>
          <a className="group">
            <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1">
              <Image
                alt={product.name}
                title={product.name}
                src={product.image.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-4 text-base text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              ${product.price}
            </p>
          </a>
        </Link>
      ))}
    </div>
  );
};
