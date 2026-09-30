import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

export default defineConfig({
  site: process.env.SITE ?? 'https://shami-momo.github.io',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, {
        strict: false,
        throwOnError: false,
        macros: {
          '\\odv': '\\frac{\\mathrm{d}#1}{\\mathrm{d}#2}',
          '\\odif': '\\mathrm{d}#1',
          '\\pdv': '\\frac{\\partial#1}{\\partial#2}',
          '\\mdv': '\\frac{\\mathrm{D}#1}{\\mathrm{D}#2}',
          '\\grad': '\\nabla',
          '\\divg': '\\nabla \\cdot',
          '\\curl': '\\nabla \\times',
          '\\laplacian': '\\nabla^2',
          '\\oddv': '\\frac{\\mathrm{d}^2#1}{\\mathrm{d}#2^2}',
          '\\pddv': '\\frac{\\partial^2#1}{\\partial#2^2}',
          '\\ehat': '\\hat{\\mathbf{e}}_{#1}',
          '\\uhat': '\\hat{\\mathbf{u}}_{#1}',
        },
      }]],
    }),
  },
});
