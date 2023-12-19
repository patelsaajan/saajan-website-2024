import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { BlogMetadata } from "./interfaces/blogMetadataInterface";

const getBlogMetadata = (): BlogMetadata[] => {
  const folder = path.join(process.cwd(), "/markdownFiles/blog/");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith("md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      body: matterResult.data.body,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export default getBlogMetadata;
