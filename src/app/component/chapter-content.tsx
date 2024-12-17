import { Chapter } from "@/lib/types/chapter";


interface ChapterContentProps {
  chapter: Chapter;
}

export default function ChapterContent({ chapter }: ChapterContentProps) {
  return (
    <article className="prose prose-stone max-w-none">
      <h1>{chapter.title}</h1>
      <div className="mb-8">{chapter.content}</div>
      
      {chapter.sections.map((section) => (
        <section key={section.id} className="mb-12">
          <h2>{section.title}</h2>
          <div className="mb-6">{section.content}</div>
          
          {section.equations && (
            <div className="my-6 p-4 bg-stone-50 rounded-lg">
              {section.equations.map((equation, index) => (
                <div key={index} className="mb-2">
                  {equation}
                </div>
              ))}
            </div>
          )}
          
          {section.diagrams && (
            <div className="my-6">
              {section.diagrams.map((diagram, index) => (
                <div key={index} className="mb-4">
                  {diagram}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </article>
  );
}
