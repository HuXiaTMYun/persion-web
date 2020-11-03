<template>
  <div class="container">
    <BlogDetails :value="value"></BlogDetails>
  </div>
</template>

<script>
import BlogDetails from "../../../../components/blog/blog-details";
import { TITLE_PLF_NAME } from "assets/properties.js";
export default {
  layout: "blog-layout",
  name: "blog_code",
  data() {
    return {
      blog_code: this.$route.params.blog_code,
      value: `
                  Heading
=======

Sub-heading
-----------

Paragraphs are separated
by a blank line.

Two spaces at the end of a line
produces a line break.

Text attributes _italic_,
**bold**, \`monospace\`.

Horizontal rule:

---

Strikethrough:
~~strikethrough~~

Bullet list:

  * apples
  * oranges
  * pears

Numbered list:

  1. lather
  2. rinse
  3. repeat

An [example](http://example.com).

![Image](Icon-pictures.png "icon")

> Markdown uses email-style > characters for blockquoting.

Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.
                `,
      htmlTitle: ""
    };
  },
  asyncData({ route, error }) {
    return { htmlTitle: route.params.blog_code + TITLE_PLF_NAME };
  },
  components: { BlogDetails },
  head() {
    return {
      title: this.htmlTitle
    };
  }
};
</script>

<style scoped>
</style>
