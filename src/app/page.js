import { ExtendedMarkdown } from "@/components/ui/ExtendedMarkdown";
import { promises as fs } from 'fs';
import Link from "next/link";
import { ARTICLES_PATH, generateStaticParams } from './articles/[id]/page'
import { toSnakeCase, getTitle } from "@/lib/utils";

export const metadata = {
    title: 'Articles'
}

export default async function Home() {
    const files = await generateStaticParams();
    const markdowns = await Promise.all(
        files.map(async (filename) => {
            let content = await fs.readFile(`${ARTICLES_PATH}/${filename.id}.md`, 'utf8');
            content = content.split("---")[0];
            return { filename: filename.id, content: content }
        })
    );
    return (
        <div className="max-w-4xl mx-auto p-4 font-mono">
            {markdowns.map(({ filename, content }, i) => {
                const url = '/articles/' + filename;
                const id = toSnakeCase(getTitle(content));
                return (<Link id={id} href={url}>
                    <ExtendedMarkdown key={i} content={content} canHaveLinks={false} />
                </Link >)
            })}
        </div >
    )
}
