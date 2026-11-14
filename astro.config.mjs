import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import remarkScratch from './src/plugins/remark-scratch.mjs';
import remarkStappen from './src/plugins/remark-stappen.mjs';

export default defineConfig({
  site: 'https://cdjmanuals.wannesdeloore.be',
  // De klassieke unified-processor, omdat onze eigen plugins (blokjes en
  // stapnummers) remark-plugins zijn.
  markdown: { processor: unified({ remarkPlugins: [remarkScratch, remarkStappen] }) },
  integrations: [
    starlight({
      title: 'CoderDojo manuals',
      description: 'Gratis handleidingen om zelf te leren programmeren. Voor ninja\'s, thuis of in de dojo.',
      // Nederlands staat in de root. Een vertaling komt later in een eigen map
      // (bv. src/content/docs/fr/) met een extra locale hieronder.
      defaultLocale: 'root',
      locales: { root: { label: 'Nederlands', lang: 'nl' } },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/wannes-cmyk/CoderDojoManuals' },
      ],
      sidebar: [
        { label: 'Start', link: '/' },
        { label: 'Scratch', items: [
          { label: 'Alle Scratch-projecten', link: '/scratch/' },
          { label: 'Beginner', items: [{ autogenerate: { directory: 'scratch/beginner' } }] },
          { label: 'Gevorderd', items: [{ autogenerate: { directory: 'scratch/gevorderd' } }] },
          { label: 'Expert', items: [{ autogenerate: { directory: 'scratch/expert' } }] },
        ] },
        { label: 'Over deze site', link: '/over/' },
      ],
      customCss: [
        '@fontsource-variable/archivo/wdth.css',
        '@fontsource/andika/400.css',
        '@fontsource/andika/400-italic.css',
        '@fontsource/andika/700.css',
        './src/styles/custom.css',
      ],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
        // Eén licht thema: de site wordt overdag gelezen, naast Scratch.
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/Leeg.astro',
      },
      head: [
        // Simple Analytics: geen cookies, geen persoonsgegevens.
        { tag: 'script', attrs: { async: true, src: 'https://scripts.simpleanalyticscdn.com/latest.js' } },
      ],
      lastUpdated: false,
      pagefind: true,
    }),
  ],
});
