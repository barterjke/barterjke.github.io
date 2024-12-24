import { Highlight } from "prism-react-renderer"

export const CodeBlock = ({code, language, className, theme}) => (
  <Highlight
    theme={theme ?? ""}
    // theme={themes.shadesOfPurple}
    code={code ?? "empty code block"}
    language={language ?? "cpp"}
  >
    {({ style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {/* <span>{i + 1}</span> */}
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)