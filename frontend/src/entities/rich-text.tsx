"use client";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type BlocksRendererProps = Parameters<typeof BlocksRenderer>[0];

// export default function RichText(props: BlocksRendererProps) {
//   return <BlocksRenderer content={props.content} blocks={props.blocks} />;
// }

export function StyledBlocksRenderer(content: BlocksRendererProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <BlocksRenderer
      content={content.content}
      blocks={{
        list: ({ children, format }) => {
          switch (format) {
            case "unordered":
              return (
                <ul className="my-2 inline-block list-disc pl-6">{children}</ul>
              );
            case "ordered":
              return (
                <ul className="my-2 inline-block list-decimal pl-6">
                  {children}
                </ul>
              );
            default:
              return (
                <ul className="my-2 inline-block list-disc pl-6">{children}</ul>
              );
          }
        },
        paragraph: ({ children }) => <p className="my-2">{children}</p>,
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return (
                <h1 className="h1 mb-5 pr-1 font-specTitle text-3xl font-bold uppercase tracking-wide text-spec-gold-light sm:text-left">
                  {children}
                </h1>
              );
            case 2:
              return (
                <h2 className="h2 mb-5 pr-1 font-specTitle text-3xl font-bold uppercase tracking-wide text-spec-gold-light sm:text-left">
                  {children}
                </h2>
              );
            case 3:
              return (
                <h3 className="h3 mb-5 pr-1 font-specTitle text-3xl font-bold uppercase tracking-wide text-spec-gold-light sm:text-left">
                  {children}
                </h3>
              );
            case 4:
              return (
                <h4 className="h4 mb-5 pr-1 font-specTitle text-3xl font-bold uppercase tracking-wide text-spec-gold-light sm:text-left">
                  {children}
                </h4>
              );
            case 5:
              return (
                <h5 className="h5 mb-5 pr-1 font-specTitle text-3xl font-bold uppercase tracking-wide text-spec-gold-light sm:text-left">
                  {children}
                </h5>
              );
            case 6:
              return (
                <h6 className="h6 mb-5 pr-1 font-specTitle text-3xl font-bold uppercase tracking-wide text-spec-gold-light sm:text-left">
                  {children}
                </h6>
              );
            default:
              return (
                <h2 className="h1 mb-5 pr-1 font-specTitle text-3xl font-bold uppercase tracking-wide text-spec-gold-light sm:text-left">
                  {children}
                </h2>
              );
          }
        },
        link: ({ children, url }) => (
          <Link
            href={url}
            className="text-spec-gold-light underline transition-colors hover:text-spec-gold-light-hover"
          >
            {children}
          </Link>
        ),
        image: ({ image }) => (
          <Image
            src={image.url}
            alt={image.alternativeText ? image.alternativeText : ""}
            width={image.width}
            height={image.height}
            className=""
          />
        ),
      }}
      modifiers={{
        bold: ({ children }) => (
          <span className="font-bold text-spec-gold-light">{children}</span>
        ),
        italic: ({ children }) => <span className="italic">{children}</span>,
        underline: ({ children }) => (
          <span className="inline-block border-b border-spec-gold-light">
            {children}
          </span>
        ),
      }}
    />
  ) : (
    <div className=""></div>
  );
}
