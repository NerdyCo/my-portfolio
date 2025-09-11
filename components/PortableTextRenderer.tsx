import { PortableText } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";

interface PortableTextProps {
  content: SanityDocument["content"];
}

const PortableTextRenderer = ({ content }: PortableTextProps) => {
  if (!content) return null;

  const components = {
    block: {
      // Hapus semua kelas di sini, biarkan prose yang mengaturnya
      normal: ({ children }: any) => <p>{children}</p>,
      h1: ({ children }: any) => <h1>{children}</h1>,
      h2: ({ children }: any) => <h2>{children}</h2>,
      h3: ({ children }: any) => <h3>{children}</h3>,
    },
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>,
      em: ({ children }: any) => <em>{children}</em>,
      link: ({ children, value }: any) => (
        <a href={value.href} className="text-gray-300 hover:underline">
          {children}
        </a>
      ),
    },
  };

  return <PortableText value={content} components={components} />;
};

export default PortableTextRenderer;
