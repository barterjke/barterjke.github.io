import { Article } from "@/components/ui/article";
import { promises as fs } from 'fs'

export async function generateStaticParams() {
  const path = process.cwd() + '/public/articles';
    return (await fs.readdir(path)).map(
        file_name => {
            file_name = file_name.substring(0, file_name.length - 3);
            return {id: file_name};
        });
}

export default async function Page({ params }) {
  const path = process.cwd() + '/public/articles'
  const content = await fs.readFile(`${path}/${(await params).id}.md`, 'utf8')
  return (
    <div className="max-w-4xl mx-auto p-4 font-mono">
      <Article key={0} content={content} />
    </div>
  )
}
