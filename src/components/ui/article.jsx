import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code_block";
import Markdown from 'react-markdown'
import { themes } from "prism-react-renderer"
import remarkGfm from 'remark-gfm'
import { Link as LinkIcon } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";

function to_snake_case(name) {
    if (name && name.replaceAll)
        return name.replaceAll(" ", "_")
}

export const Article = ({ content, isLink, key }) => {
    content = content
        .replace(/<!--[\s\S]*?-->/g, '')
        .split('\n')
        .map(el => el.trimEnd())
        .join('  \n');
    
    const mdComponents = {
        img(props) {
            let alt = props.alt;
            let dimensionsInd = alt.search(/\|\d+(?:x\d+)?$/)
            if (dimensionsInd != -1) {
                const dimensions = alt.substring(dimensionsInd + 1);
                const [width, height = "auto"] = dimensions.split('x');
                alt = alt.substring(0, dimensionsInd);
                let style = { ...props.style, height: height + 'px' };
                props = { ...props, style, width, height };
            }
            props = { ...props, className: "mx-auto", alt, title: props.title || props.alt};
            let inside = <img {...props} />;
            if (props.src.startsWith("https://www.youtube.com")) {
                inside = <iframe {...props} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            }
            return (<div className={"relative bg-opacity-40 bg-black py-4 " + (alt ? "pb-8" : "")}>
                {inside}
                <p className="absolute w-full text-center left-0 -bottom-2rem">{props.alt}</p>
            </div>)
        },
        input(props) {
            return <Checkbox {...props}/>
        },
        checkbox(props) {
            return <h1>#checkbox</h1>;
        },
        h1(props) {
            const text = props.children;
            const id = encodeURIComponent(text);
            const inside = <h1 className="inline" id={id}>{text}
                <LinkIcon className="inline ml-2" size={20} />
            </h1>;
            return isLink ? <>{inside}</> : (<a href={"#" + id} > {inside}</a>);
        },
        h2(props) {
            const text = props.children;
            return <h2 id={encodeURIComponent(text)}>{text}</h2>
        },
        code(props) {
            let code = props.children;
            console.log(code)
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
                <CodeBlock language={lang}
                    className="my-3 bg-opacity-40 bg-black"
                    theme={themes.shadesOfPurple}
                    code={code} />
            )
        },
        p(props) {
            let text = props.children;
            console.log(text)
            if (text && text.startsWith && text.startsWith("<!--") && text.endsWith("-->")) return <></>
            return <div>{props.children}</div>
        }
    };
    if (isLink) {
        mdComponents['a'] = (props) => {
            return <span className="like-a" {...props} />
        }
    }
    return (
        <Card key={key}
            className={`card bg-slate-800 ${isLink ? "hover:bg-slate-600" : ""} border-white/[.145] text-white my-5`}>
            <CardContent className="p-6">
                <Markdown
                    remarkPlugins={remarkGfm}
                    components={mdComponents}>{content}</Markdown>
            </CardContent>
        </Card>
    )
}
