import type { Content } from "lib/types";
import Link from "next/link";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";

type Props = {
  title: string;
  content: Content;
};

export const Article = ({ title, content }: Props) => {
  return (
    <article>
      <Link href="/">
        <a className="text-blue-500 underline">Back to home</a>
      </Link>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">{title}</h1>
      <div className="mt-8 prose max-w-none">
        <RichText
          content={content.raw.children}
          renderers={{
            a: ({ children, href, openInNewTab }) => (
              <a
                href={href}
                className="text-blue-500 underline"
                target={openInNewTab ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            img: ({ src, altText, height, width }) => (
              <Image
                className="bg-gray-200 rounded-md"
                src={src as string}
                alt={altText}
                title={altText}
                height={height}
                width={width}
              />
            ),
          }}
        />
      </div>
    </article>
  );
};
