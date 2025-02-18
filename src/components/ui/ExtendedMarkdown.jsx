import { Card, CardContent } from "@/components/ui/Card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Markdown from 'react-markdown'
import { themes } from "prism-react-renderer"
import remarkGfm from 'remark-gfm'
import { Link as LinkIcon } from 'lucide-react';
import { Checkbox } from "@/components/ui/CheckBox";
import { assert } from "console";
import { Image } from "./Image";
import { cn, toSnakeCase } from "@/lib/utils"

function Header(props, ind) {
    if (ind < 0 || ind > 6) {
        return (<p {...props} />);
    }
    const text = props.children;
    const id = toSnakeCase(text);
    const Tag = `h${ind}`;
    return (
        <Tag id={id}>{text}
            <LinkIcon className="inline ml-2" size={20} />
        </Tag>
    )
}

function HeaderWithLink(props, ind) {
    return <a href={"#" + toSnakeCase(props.children)} >{Header(props, ind)}</a>;
}


export const ExtendedMarkdown = ({ content, canHaveLinks }) => {
    content = content
        .replace(/<!--[\s\S]*?-->/g, '')
        .split('\n')
        .map(el => el.trimEnd())
        .join('  \n');

    const mdComponents = {
        img: Image,
        input: (props) => <Checkbox {...props} />,
        h1: (props) => !canHaveLinks ? Header(props, 1) : HeaderWithLink(props, 1),
        h2: (props) => !canHaveLinks ? Header(props, 2) : HeaderWithLink(props, 2),
        code: (props) => (
            <CodeBlock
                className="my-3" // bg-opacity-40 bg-black
                theme={""}
                code={props.children} />
        ),
        p: (props) => (<div>{props.children}</div>),
        a: (props) => !canHaveLinks ? <span className="like-a" {...props} /> : <a {...props}></a>
    };
    return (
        <Card
            className={cn('card bg-current border-white/[.145] text-white my-5', !canHaveLinks && "hover:bg-currentHovered")}>
            <CardContent className="p-6">
                <Markdown
                    remarkPlugins={remarkGfm}
                    components={mdComponents}>{content}</Markdown>
            </CardContent>
        </Card>
    )
}
