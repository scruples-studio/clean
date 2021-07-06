# Clean
Clean is a ready-to-go minimalist Statamic Starter Kit. Perfect for a small personal site or blog: drop your logo, add some content and you’re ready to deploy.

Everything to get the site running like the demo can be configured from the control panel, with no need to touch the underlying code.

## Configuring
Clean is 

### Logo

### Content
- Pages collection
- Writing collection

## Globals

### SEO

### Footer

### Options

### Scripts

## Navigation

## Styling
The recommended method for adding custom CSS is through the `/public/css/custom.css` file. Adding CSS here keeps it separate if future releases impact the core SCSS/CSS files.

CSS variables (listed in `/resources/sass/variables.scss`) allow you to make many site-wide changes, through the `custom.css` file, e.g.:

```
:root {
    --color-bg: lightblue;
}
```

If you want to edit the core files, the kit includes an unminified `public/css/main.css` file. If you’re compiling the files, you can explore `/resources/sass`: just set `main.scss` to compile to `/public/css/main.css`. 

**Note that editing files in `/resources/sass` or `/public/css/main.css` directly may make it difficult to update Clean in future.**
