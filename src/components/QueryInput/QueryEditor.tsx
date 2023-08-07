import { useState, useRef, useEffect } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import sql from "react-syntax-highlighter/dist/esm/languages/hljs/sql";
import vsTheme from "react-syntax-highlighter/dist/esm/styles/hljs/vs";
import Button from "../Button/Button";
import { useQueryContext } from "../../contexts/QueryContext";
import { defaultQuery } from "../../constants/constants";

SyntaxHighlighter.registerLanguage("sql", sql);

const QueryEditor = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {
    queryContext: { selectedQuery },
    setQueryContext,
  } = useQueryContext();
  const [query, setQuery] = useState(defaultQuery);

  const handleExecute = () => {
    setQueryContext((state) => ({ ...state, query }));
  };

  useEffect(() => {
    if (selectedQuery) {
      setQuery(selectedQuery);
    }
  }, [selectedQuery]);

  return (
    <section>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => textareaRef.current?.focus()}
        onClick={() => textareaRef.current?.focus()}
        className="relative flex bg-light h-32"
      >
        <textarea
          className="absolute selection:bg-blue-500 selection:text-light inset-0 resize-none bg-transparent py-2 pl-8 font-mono text-transparent caret-black outline-none"
          value={query}
          ref={textareaRef}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          autoComplete="on"
        />
        <SyntaxHighlighter
          language="javascript"
          style={vsTheme}
          customStyle={{
            flex: "1",
            background: "transparent",
          }}
          lineNumberStyle={{ background: "#EEEEEE", opacity: 0.5 }}
          showLineNumbers
        >
          {query}
        </SyntaxHighlighter>
      </div>
      <div className="flex my-4 gap-4">
        <Button onClick={handleExecute}>Execute Query</Button>
      </div>
    </section>
  );
};

export default QueryEditor;
