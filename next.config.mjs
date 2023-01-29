// @ts-check

import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  basePath: '/faq-next-poc',
  pageExtensions: ['mdx', 'md', 'tsx', 'ts', 'jsx', 'js'],
}

// https://nextjs.org/docs/advanced-features/using-mdx
const withMDX = nextMDX({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
