# Clean
Clean is a ready-to-go minimalist Statamic Starter Kit. Perfect for a small personal site or blog: drop your logo, add some content and you’re ready to deploy.

Everything to get the site running like the demo can be configured from the control panel, with no need to touch the underlying code.

## Installation
To install Clean, follow the [Starter Kit installation instructions](https://statamic.dev/installing-a-starter-kit). Note that you will need to be running **Statamic 3.2+**.

### Installing into an existing site

    php please starter-kit:install scruples-studio/clean
    
### Installing via the Statamic CLI Tool
If you have [Statamic’s CLI Tool installed](https://github.com/statamic/cli), you can create a new Statamic installation with the Clean Starter Kit in one line:

    statamic new my-site scruples-studio/clean

## Configuring
You can replicate everything in the [demo site](https://clean.scrupl.es) through the control panel. 

If you make changes under-the-hood, be aware these may conflict with future updates to Clean. But if you’re doing that, you’re probably comfortable with keeping things up-to-date anyway 👍

### Content
The Starter Kit has two Collections: **Pages** and **Writing**. Both Collections feature a similar content format using Statamic’s Bard editor, including:

* Standard text formatting (headings, bold, italic, lists, blockquotes, code, links, horizontal rules)
* Images block
* Video block
* Buttons block

All pages also feature an `SEO` section, where you can:
* Set the SEO page title
* Set the SEO page description
* Upload an open graph image

#### Pages
* Home page allows you to edit the page title and SEO information.
* About and Privacy are example standard text pages.

#### Writing
* This is where you add your blog posts

## Globals
Options available under `Globals`.

### Branding
In `Globals > Branding`, you can upload a logo image.

This will have the site name (from your `.env` file) as the `alt` and is set to a maximum of `3rem` high. The height can be changed with custom CSS:

    .logo img {
        height: 4rem;
    }
    
If you don’t set a logo, the site uses the site name (from `.env`) displayed as text.

### Custom CSS
Here you can add custom CSS to inject in your site’s `<head>`. Any CSS added here is inserted _after_ the site’s `main.css` and `custom.css` files, so the code will take precedence. 

See the **Styling** section below to dig deeper into your options for adding custom CSS.

### Footer
Here you can add content to the two footer columns. The `Link` columns are optional: if you don’t add a link, the list item will be pure text (no `a` tag).

### Options
Here you can:
* Upload your site’s favicon
* Change the pagination link text at the bottom of each article

### SEO
This section allows you to set the default global:
* `Site Title` which appears in the page tab, e.g. `Home | Site Title`
* `Open Graph Image` – this can overwritten on individual pages by uploading a new SEO image

### Scripts
This area lets you add scripts to two areas of your site:
1. **Head**: within the `<head>` element
2. **Footer**: Just before the closing `</body>` element

Note that some scripts may require you to add a cookie banner, which would need to be added manually. For simple, privacy-focused analytics, we recommend [Fathom](https://usefathom.com/ref/MVEBFV) (this link gives you $10 off your first bill and we receive a small commission).

## Navigation
The site supports one navigation with the name `Main`. The menu is designed to be short: on mobile views, menu items wrap onto a new line if the menu is wider than the viewport.

## RSS
Clean has a pre-configured RSS feed available at `/feed`.

## Styling
The recommended method for adding custom CSS is through the `/public/css/custom.css` file. It’s also possible to add some inline CSS in `Globals > Custom CSS`.

Using one of these methods makes it easier to keep your starter kit up-to-date, especially if future releases affect the core SCSS/CSS files.

The `:root` CSS variables, allow you to make many site-wide changes through your `custom.css` file. For instance, you can change the background colour with:

```
:root {
    --color-bg: lightblue;
}
```

If you want to edit the core files, the kit includes an unminified `public/css/main.css` file.

## License
