import Color from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import { Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FontSize } from "../plugins/fontSize";

const editor = new Editor({
  editorProps: {
    attributes: {
      class: "outline-none prose prose-invert",
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
      types: ["paragraph", "heading"],
    }),
    TextStyle,
    FontFamily,
    FontSize,
    Color,
    Highlight.configure({
      multicolor: true,
    }),
  ],
});

export default editor;
