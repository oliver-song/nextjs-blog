import { PostMetadata } from "./PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    
    // get gray-matter data from each file
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResults = matter(fileContents);
      return {
        title: matterResults.data.title,
        date: matterResults.data.date,
        subtitle: matterResults.data.subtitle,
        slug:fileName.replace(".md", ""),
      };
    });
    return posts;
  };

  export default getPostMetadata;