import { Node, mergeAttributes, textblockTypeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import EditorBlock from "../components/EditorBlock";

export const BackTickInputRegex = new RegExp("^```([a-z]+)?[s\n]$");

const matches = BackTickInputRegex.exec(
  ["js" || "ts" || "java" || "php" || "go" || "py" || "cli"].join()
);

export const CodeBlock = Node.create({
  name: "CodeBlock",
  content: "text*",
  code: true,
  marks: '',
  group: "block",

  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: true,
      exitOnArrowDown: true,
      HTMLAttributes: {},
    };
  },

  addInputRules() {
    return [
      textblockTypeInputRule({
        find: BackTickInputRegex,
        type: this.type,
        getAttributes: () => {
          matches;
        },
      }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(EditorBlock);
  },

  parseHTML() {
    return [{ tag: "editor-block" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["editor-block", mergeAttributes(HTMLAttributes)];
  },
});
