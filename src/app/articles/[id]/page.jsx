import { ExtendedMarkdown } from "@/components/ui/ExtendedMarkdown";
import { getTitle, toSnakeCase } from "@/lib/utils";
import { promises as fs } from 'fs'
import { ArrowLeft, MoveUp } from 'lucide-react'
import Link from "next/link";

export const ARTICLES_PATH = process.cwd() + '/public/articles';

export async function generateStaticParams() {
    return (await fs.readdir(ARTICLES_PATH)).map(
        file_name => ({ id: file_name.substring(0, file_name.length - 3), path: ARTICLES_PATH }));
}

export async function generateMetadata({ params }) {
    const content = await fs.readFile(`${ARTICLES_PATH}/${(await params).id}.md`, 'utf8')
    return {
        title: getTitle(content)
    }
}


export default async function Page({ params }) {
    const content = await fs.readFile(`${ARTICLES_PATH}/${(await params).id}.md`, 'utf8')
    const returnId = '/#' + toSnakeCase(getTitle(content));
    return (
        <div className="max-w-4xl mx-auto p-4 font-mono">
            <ExtendedMarkdown content={content} canHaveLinks={true} />
            <footer className="flex justify-center w-full font-mono">
                <Link className="flex mx-4" href={returnId}><ArrowLeft className="pr-1" />Go back</Link>
                <Link className="flex mx-4" href={'#'}><MoveUp className="pl-2 mr-1" /> Go top</Link>
            </footer>
        </div>
    )
}
