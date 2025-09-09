import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";

interface PortableTextProps {
  content: SanityDocument["content"];
}

const PortableTextRenderer = ({ content }: PortableTextProps) => {
  if (!content) return null;

  const components = {
    block: {
      normal: ({ children }: any) => (
        <p className="text-black/60 font-medium text-sm leading-relaxed prose md:prose-lg text-left">
          {children}
        </p>
      ),
      h1: ({ children }: any) => (
        <h1 className="text-4xl font-bold">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-bold">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-bold">{children}</h3>
      ),
    },
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>,
    },
  };

  return <PortableText value={content} components={components} />;
};

export default PortableTextRenderer;
