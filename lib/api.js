import matter from "gray-matter";
import fs from "fs";
import { join, parse } from "path";
import process from "process";

const postsDirectory = join(process.cwd(), "/_days");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = parse(slug).name;
  const fullPath = join(postsDirectory, `${realSlug}.json`);
  const fileContents = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
  return fileContents;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1));
  return posts;
}
