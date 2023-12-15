import markdownit from "markdown-it";
import path from "path";
import fs from "fs";

const MdContent = async (route: any) => {
  let markdownContent;
  if (!import.meta.env.PROD) {
    const currentUrl = new URL(import.meta.url);
    const filePath = new URL(`../content${route.path}/doc.md`, currentUrl)
      .pathname;
    const response = await fetch(filePath);
    markdownContent = await response.text();
  } else {
    const filePath = path.join(
      process.cwd(),
      `/src/content${route.path}/doc.md`
    );
    markdownContent = await fs.readFileSync(filePath, "utf-8");
  }
  const md = markdownit();
  return md.render(markdownContent);
};

export default MdContent;
