import { Highlight } from "prism-react-renderer"
import CopyButton from "./CopyButton"
import { cn } from "@/lib/utils"

export const CodeBlock = ({ code, className, theme }) => {
    let lang = ""
    const tag = "#lang:";
    if (code.startsWith(tag)) {
        let spaceInd = code.search(/\s/g);
        if (spaceInd == -1) spaceInd = code.length;
        lang = code.substring(tag.length, spaceInd);
        code = code.substring(spaceInd + 1);
    }
    code = code.trim()
    return (
        <Highlight
            theme={theme ?? ""}
            code={code ?? "empty code block"}
            language={lang}
        >
            {
                ({ style, tokens, getLineProps, getTokenProps }) => {
                    const isInline = tokens.length == 1;
                    className = cn(className, 'code_block relative', isInline ? 'p-1 inline' : 'p-3');
                    return <div style={style} className={className}>
                        {!isInline && <CopyButton text={code} />}
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