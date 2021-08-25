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

## RSS

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
