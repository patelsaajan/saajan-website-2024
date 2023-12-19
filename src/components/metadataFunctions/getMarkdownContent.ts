import path from "path";
import fs from "fs";
import matter from "gray-matter";

type filePromp = { slug: string; folder: string };

const getMarkdownContent = (slug: string, folder: string) => {
  const adjFolder = path.join(process.cwd(), folder);
  const file = `${adjFolder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
export default getMarkdownContent;
