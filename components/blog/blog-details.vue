<template>
  <div class="container" v-html="getMarkdownValue">
  </div>
</template>

<script>
    const md = require('markdown-it')({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (__) {
                }
            }
            return ''; // 使用额外的默认转义
        }
    })
    export default {
        components: {},
        name: "blog-details",
        data() {
            return {
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
                `
            }
        },
        computed: {
            getMarkdownValue() {
                return md.render(this.value)
            }
        }
    }
</script>

<style scoped>

</style>
