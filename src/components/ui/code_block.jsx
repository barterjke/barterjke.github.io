import { Highlight } from "prism-react-renderer"
import CopyButton from "./copy_button"

export const CodeBlock = ({ code, language, className, theme }) => {
    return (
        <Highlight
            theme={theme ?? ""}
            code={code ?? "empty code block"}
            language={language}
        >
            {
                ({ style, tokens, getLineProps, getTokenProps }) => {
                    const is_inline = tokens.length == 1;
                    if (is_inline)
                        className += " p-1 inline";
                    else
                        className += " p-3"
                    className += " code_block relative";
                    return <div className={className}>
                        {!is_inline && <CopyButton text={code} />}
                        {tokens.map((line, i) => (
                            <p key={i} {...getLineProps({ line })} className={tokens.length == 1 ? "inline" : ""} >
                                {/* <span>{i + 1}</span> */}
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </p>
                        ))}
                    </div>
                }
            }
        </Highlight>
    )
}