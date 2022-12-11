import { pageSorter } from "./utils.js";
import { ArticleInfoType } from "../../../shared/index.js";

import type { BlogCategoryOptions } from "vuepress-plugin-blog2";
import type { GitData } from "@vuepress/plugin-git";
import type {
  ArticleInfo,
  BlogPluginOptions,
  ThemeData,
  ThemeNormalPageFrontmatter,
} from "../../../shared/index.js";

export const getCategoryCategory = (
  options: BlogPluginOptions,
  themeData: ThemeData
): BlogCategoryOptions<
  { git: GitData },
  ThemeNormalPageFrontmatter,
  { routeMeta: ArticleInfo }
> =>
  <
    BlogCategoryOptions<
      { git: GitData },
      ThemeNormalPageFrontmatter,
      { routeMeta: ArticleInfo }
    >
  >{
    key: "category",
    getter: ({ routeMeta }) => routeMeta[ArticleInfoType.category] || [],
    sorter: pageSorter,
    path: options.category,
    layout: "Blog",
    frontmatter: (localePath) => ({
      title: themeData.locales[localePath].blogLocales.category,
    }),
    itemPath: options.categoryItem,
    itemFrontmatter: (name, localePath) => ({
      title: `${name} ${themeData.locales[localePath].blogLocales.category}`,
    }),
    itemLayout: "Blog",
  };

export const getTagCategory = (
  options: BlogPluginOptions,
  themeData: ThemeData
): BlogCategoryOptions<
  { git: GitData },
  ThemeNormalPageFrontmatter,
  { routeMeta: ArticleInfo }
> =>
  <
    BlogCategoryOptions<
      { git: GitData },
      ThemeNormalPageFrontmatter,
      { routeMeta: ArticleInfo }
    >
  >{
    key: "tag",
    getter: ({ routeMeta }) => routeMeta[ArticleInfoType.tag] || [],
    sorter: pageSorter,
    path: options.tag,
    layout: "Blog",
    frontmatter: (localePath) => ({
      title: themeData.locales[localePath].blogLocales.tag,
    }),
    itemPath: options.tagItem,
    itemLayout: "Blog",
    itemFrontmatter: (name, localePath) => ({
      title: `${name} ${themeData.locales[localePath].blogLocales.tag}`,
    }),
  };