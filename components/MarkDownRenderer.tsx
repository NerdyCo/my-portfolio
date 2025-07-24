import { remark } from "remark";
import html from "remark-html";

interface MarkDownRendererProps {
  markdown: string;
}

const MarkDownRenderer = async ({ markdown }: MarkDownRendererProps) => {
  const processedContent = await remark().use(html).process(markdown);
  const contentHtml = processedContent.toString();

  return (
    <div
      className="text-black/60 font-medium text-sm leading-6"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
};

export default MarkDownRenderer;
