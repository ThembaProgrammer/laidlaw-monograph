import { Book, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const TableOfContents = () => {
  // Example contents data structure
  const contents = [
    {
      id: 1,
      title: "Part I: Foundations",
      chapters: [
        { id: 1, title: "Introduction to the Subject", page: 1 },
        { id: 2, title: "Basic Concepts", page: 15 },
        { id: 3, title: "Core Principles", page: 32 }
      ]
    },
    {
      id: 2,
      title: "Part II: Advanced Topics",
      chapters: [
        { id: 4, title: "Advanced Theory", page: 58 },
        { id: 5, title: "Practical Applications", page: 89 },
        { id: 6, title: "Case Studies", page: 120 }
      ]
    },
    {
      id: 3,
      title: "Part III: Special Topics",
      chapters: [
        { id: 7, title: "Contemporary Issues", page: 155 },
        { id: 8, title: "Future Directions", page: 189 },
        { id: 9, title: "Conclusion", page: 220 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Book Cover Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <div className="text-center">
            <Book className="mx-auto text-stone-700 mb-4" size={48} />
            <h1 className="text-4xl font-serif text-stone-800 mb-2">Table of Contents</h1>
            <div className="w-24 h-1 bg-stone-200 mx-auto mt-4"></div>
          </div>
        </div>

        {/* Contents Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="space-y-8">
            {contents.map((section) => (
              <div key={section.id} className="border-b border-stone-100 last:border-0 pb-6 last:pb-0">
                <h2 className="text-xl font-serif text-stone-800 mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.chapters.map((chapter) => (
                    <Link 
                      href={`/chapters/${chapter.id}`} 
                      key={chapter.id}
                      className="flex items-center justify-between group p-2 hover:bg-stone-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-stone-400 font-serif">
                          Chapter {chapter.id}.
                        </span>
                        <span className="text-stone-700 group-hover:text-stone-900">
                          {chapter.title}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-stone-400 font-serif">
                          page {chapter.page}
                        </span>
                        <ChevronRight 
                          className="text-stone-300 group-hover:text-stone-600 transition-colors" 
                          size={16} 
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Decoration */}
          <div className="mt-8 pt-4 border-t border-stone-100 text-center">
            <span className="text-stone-400 font-serif text-sm">
              ❦
            </span>
          </div>
        </div>

        {/* Book Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <div className="text-center text-stone-600 text-sm">
            <p>Total Pages: 245</p>
            <p>© 2024 Edition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;