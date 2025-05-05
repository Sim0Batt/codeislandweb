<template>
  <div class="editor-container">
    <div class="toolbar">
      <button @click="toggleBold" :class="{ active: isActive('bold') }">Bold</button>
      <button @click="toggleItalic" :class="{ active: isActive('italic') }">Italic</button>
      <button @click="toggleUnderline" :class="{ active: isActive('underline') }">Underline</button>
      <button @click="setLink">Link</button>
      <button @click="toggleHeading(2)" :class="{ active: isActive('heading', { level: 2 }) }">H2</button>
      <button @click="toggleBulletList" :class="{ active: isActive('bulletList') }">• List</button>
        <button @click="toggleIndent" :class="{ active: isActive('textAlign', { textAlign: 'justify' }) }">Giustifica</button>
    </div>

    <EditorContent :editor="editor" class="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'

export default {
  name: 'EditorText',
  components: {
    EditorContent,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    initialContent: {
      type: String,
      default: '<p>Hello! Edit your content here.</p>',
    },
  },
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        Underline,
        StarterKit.configure({ underline: false }),
        Heading.configure({ levels: [1, 2, 3] }),
        Link.configure({
          openOnClick: false,
          HTMLAttributes: {
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        }),
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      content: this.initialContent,
    })
  },
  beforeUnmount() {
    this.editor?.destroy()
  },
  methods: {
    getContent() {
      return this.editor?.getHTML() || ''
    },
    isActive(format, options = {}) {
      return this.editor?.isActive(format, options)
    },
    toggleBold() {
      this.editor?.chain().focus().toggleBold().run()
    },
    toggleItalic() {
      this.editor?.chain().focus().toggleItalic().run()
    },
    toggleUnderline() {
      this.editor?.chain().focus().toggleUnderline().run()
    },
    toggleHeading(level) {
      this.editor?.chain().focus().toggleHeading({ level }).run()
    },
    toggleBulletList() {
      this.editor?.chain().focus().toggleBulletList().run()
    },
    setLink() {
      const previousUrl = this.editor?.getAttributes('link').href || ''
      const url = prompt('Enter URL', previousUrl)

      if (url === null) return
      if (url === '') {
        this.editor?.chain().focus().extendMarkRange('link').unsetLink().run()
      } else {
        const formattedUrl = url.match(/^https?:\/\//) ? url : `https://${url}`
        this.editor?.chain().focus().extendMarkRange('link').setLink({ href: formattedUrl }).run()
      }
    },
    toggleIndent() {
      this.editor?.chain().focus().setTextAlign('justify').run()
    },
  },
}
</script>

<style scoped>
.editor-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}

.toolbar {
  text-align: center;
  width: 90%;
  background-color: #777;
  border-radius: 15px;
  padding: 5px;
}

.toolbar button {
  margin-right: 5px;
  padding: 6px 12px;
  border: none;
  background-color: #555;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.toolbar button:hover {
  background-color: #908b8b;
}

button.active {
  background-color: #ddd !important;
  color: black !important;
}

.editor {
  width: calc(100% - 40px); /* Adjust width to account for margin */
  min-height: 300px;
  margin: 20px; /* Add margin around the editor */
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
  background-color: white;
  color: black;
}
</style>
