/**
 * RSS feed for blog posts.
 * Uses profile data for feed title/description.
 */
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import profile from "../../data/profile";

export async function GET(context) {
  const blog = await getCollection("blog");
  const published = blog.filter((post) => post.data.published !== false);
  const sorted = published.sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return rss({
    title: `${profile.name}'s Blog`,
    description:
      "Articles about web development, modern technologies, and best practices",
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
