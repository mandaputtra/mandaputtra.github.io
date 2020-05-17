---
tags: ["post", "javascript"]
title: "A sample post with images and code'"
description: "Now I know!"
date: 2020-04-20
---

> Mighty blockquotes styles I stole from css-tricks - Manda Putra

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis elit sollicitudin, euismod ante eu, tempor ex. Nam nec elit nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus blandit neque nec ipsum rhoncus.

in mollis diam lacinia. Curabitur tortor massa, sollicitudin vitae nisi eu, accumsan rutrum sem. Mauris eget pharetra neque. Maecenas interdum sagittis pretium. Pellentesque bibendum, augue at cursus tempus, enim magna mollis purus, vel commodo dolor sapien eget nunc.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="cassidoo" data-slug-hash="GRpNBmG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Where the heck do I work">
  <span>See the Pen <a href="https://codepen.io/cassidoo/pen/GRpNBmG">
  Where the heck do I work</a> by Cassidy Williams (<a href="https://codepen.io/cassidoo">@cassidoo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Where the heck do I work by Cassidy Williams, [See the Pen](https://codepen.io/cassidoo/pen/GRpNBmG)

```js
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });
```

Quisque vel sem ligula. Phasellus non libero consectetur, hendrerit risus vitae, lacinia velit. Morbi lacinia blandit consequat. Phasellus velit eros, posuere suscipit velit eu, consectetur tristique orci. Mauris nunc nunc, tempor ultricies orci ac, venenatis porta purus.

Nunc porttitor et magna ac congue. Maecenas porta scelerisque neque vestibulum semper. Mauris eu diam feugiat, eleifend orci sed, fermentum tellus.

## Lorem Dolor
### Lorem Dolor
#### Lorem Dolor

> Nam pulvinar, ligula ac malesuada pellentesque, ante metus feugiat felis, sit amet tincidunt arcu erat at lorem. Maecenas a dolor porttitor, tincidunt nisi ac, tincidunt dolor. Donec tempus volutpat orci, ut rutrum lectus congue vitae. In sed lacus ullamcorper, ornare purus eu.

Donec convallis, augue ultricies tincidunt feugiat, nisl tortor efficitur arcu, vel consequat lorem elit id mauris. Maecenas ut mauris tincidunt, vehicula orci in, pulvinar urna. Aliquam erat volutpat. Nullam in vulputate lacus. Aliquam blandit mollis auctor.

![images](https://images.unsplash.com/photo-1589112053969-11e4dec7f699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)

Sed sagittis magna sit amet purus finibus tempor. Nam id neque purus. Suspendisse a ultricies odio. Nullam interdum lacus sem, vitae bibendum velit volutpat nec. In et lorem nec lectus tristique cursus.
