import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { RecipeMetadata } from "./interfaces/recipeMetadataInterfance";

const getRecipeMetadata = (): RecipeMetadata[] => {
  const folder = path.join(process.cwd(), "/markdownFiles/recipes/");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith("md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      name: matterResult.data.name,
      date: matterResult.data.date,
      desc: matterResult.data.desc,
      imageString: matterResult.data.imageString,
      slug: fileName.replace(".md", ""),
      ingredients: matterResult.data.ingredients,
      story: matterResult.data.story,
      optional: matterResult.data.optional,
    };
  });
  return posts;
};

export default getRecipeMetadata;
