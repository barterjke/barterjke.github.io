import { Article } from "@/components/ui/article";
import { promises as fs } from 'fs';
import Link from "next/link";

export default async function Home() {
    const path = process.cwd() + '/public/articles';
    const files = await fs.readdir(path);
    const markdowns = await Promise.all(
        files.map(async (file_path) => {
            let content = await fs.readFile(`${path}/${file_path}`, 'utf8');
            content = content.split("---")[0];
            return { filename: file_path, content: content }
        })
    );
    return (
        <div className="max-w-4xl mx-auto p-4 font-mono">
            {markdowns.map(({ filename, content }, i) => {
                let url = '/articles/' + filename.slice(0, filename.length - 3);
                return (<Link href={url}>
                    <Article key={i} content={content} isLink={true} />
                </Link >)
            })}
        </div >
    )
}
