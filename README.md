# Geizhals Styleguide

## Installation

Run: `npm install`

## Editing pages

The individual pages are located in the `src/routes/` directory, e.g. the page "Design > Iconography" is this file: src/routes/design/Iconography.svx".

The pages written in markdown, but in a special syntax called [MDsveX](https://github.com/pngwn/MDsveX) (which is a port of [MDX](https://mdxjs.com/) for the [Svelte](https://svelte.dev/) framework). See [What is MDsveX](#what-is-mdsvex) at the bottom of this Readme.

[Here's a pretty good cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for the Markdown syntax. GitHub also has [some great guides](https://help.github.com/en/github/writing-on-github/about-writing-and-formatting-on-github) to help you get started with markdown.

## Adding images

To add an image to a page, please copy your image file (png, jpg) to the directory `static/styleguide/` and then reference it in the markdown page.

There are two options to do this:

1. use Markdown syntax:  
   `![My Alt Text](styleguide/myimage.png)`

2. use HTML syntax:  
   `<img src="styleguide/myimage.png" alt="My Alt Text" style="max-width: 300px"/>`

Since MDsveX is markdown you are free to use HTML markup where required. You might want to use the second option (img-tag) if you want to specify the size of the image manually. By default the image will be sized up to 100% of the width of the content area, depending on the size of your image file.

## Adding a new page

Add a new .svx file in `src/routes/[design|components]/` and add the page to the page structure tree in `src/components/Nav.svelte`

## Preview

run `npm run dev` and open `http://localhost:3000`

## Build

run `npm run export`. The exported files are placed in `__sapper__/export`. These files can be served as static files with any webserver. (try `npx serve __sapper__/export`)

## What is MDsveX?

MDsvex is a port of [MDX](https://mdxjs.com/) for the Svelte framework. Now, what do all of these mean?

**MDX:**  
Think of MDX as "Markdown Extended". It let's you use JSX/React components your markdown pages. This makes MDX very versatile.

**MDsveX:**  
[MDsveX](https://github.com/pngwn/MDsveX) is the same idea as MDX, but for usage with Svelte components instead of React components. Since this styleguide is build with Svelte it, we are using MDsveX instead of MDX, but the same principles apply.

Basically MDsveX lets you import a Svelte component and use it along with your markdown content. This is useful to include actual UI components in our styleguide.

**Svelte:**  
is a framework for building user interfaces, similar to React and Vue with one major difference: Svelte is a compiler, which means that your code get's compiled so there's no need to ship a runtime (like React and React-DOM or Vue) along with your code. This usually results in smaller bundles and better performance.

**Sapper:**
This styleguide is built using Sapper, which is an application framework for Svelte. What Next.js is to React and Nuxt.js to Vue, Sapper is to Svelte.
