import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const editor = new Editor({
  editorProps: {
    attributes: {
      class: "outline-none group/editor",
    },
  },
  extensions: [
    StarterKit.configure({
      document: false,
      codeBlock: false,
    }),
    Document.extend({
      content: "heading block*",
    }),
    Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === "heading") {
          return "Untitled";
        }
        return "Type / to see commands...";
      },
    }),
    Typography,
    TextAlign.configure({
      types: ['paragraph', 'heading']
    }),
  ],
});


export default editor