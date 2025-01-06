import { Article } from "@/components/ui/article";
import { promises as fs } from 'fs'

export default async function Page({ params }) {
  const path = process.cwd() + '/public/articles'
  const content = await fs.readFile(`${path}/${(await params).id}.md`, 'utf8')
  return (
    <div className="max-w-4xl mx-auto p-4 font-mono">
      <Article key={0} content={content} />
    </div>
  )
}
