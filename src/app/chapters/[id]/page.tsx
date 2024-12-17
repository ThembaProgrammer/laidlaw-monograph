'use client'
import { ChevronLeft, ChevronRight, BookOpen, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

const ChapterTemplate:React.FC<{params:Promise<{id:string}>}> = ({params}) => {
  
  const currentPage = Number(use(params).id)
  // Example chapter data
  const chapter = {
    number: 1,
    title: "The Beginning",
    pages: 24,
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
      culpa qui officia deserunt mollit anim id est laborum.
    `
  };

  return (
    <div className="min-h-screen bg-stone-100 p-4 md:p-8">
      {/* Chapter Navigation Bar */}
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-t-lg p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <BookOpen className="text-stone-600" size={24} />
          <div>
            <h2 className="text-xl font-serif text-stone-800">Chapter {chapter.number}</h2>
            <p className="text-sm text-stone-500">Page {currentPage} of {chapter.pages}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-stone-100 rounded-full">
            <Bookmark className="text-stone-600" size={20} />
          </button>
          <button className="p-2 hover:bg-stone-100 rounded-full">
            <Share2 className="text-stone-600" size={20} />
          </button>
        </div>
      </div>

      {/* Book Content */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg min-h-[600px] relative">
        {/* Page Content */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-serif mb-8 text-stone-800">{chapter.title}</h1>
          
          {/* Chapter opening decoration */}
          <div className="mb-8 text-4xl font-serif text-stone-800 text-center">
            ❦
          </div>

          {/* Main content */}
          <div className="leading-relaxed text-stone-700 space-y-6 font-serif">
            {chapter.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Page decoration */}
          <div className="mt-12 text-center text-stone-400">
            * * *
          </div>
        </div>

        {/* Page Navigation */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center border-t bg-white">
          <Link 
            href={currentPage == 1? "/table-content":`/chapters/${Number(currentPage)-1}`}
            className="flex items-center space-x-2 px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg"
          >
            <ChevronLeft size={20} />
            <span>Previous Page</span>
          </Link>

          <div className="text-sm text-stone-500">
            Page {currentPage}
          </div>

          <Link
            href={currentPage != 24? `/chapters/${currentPage+1}`:"/table-content"}
            className="flex items-center space-x-2 px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg"
          >
            <span>Next Page</span>
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      {/* Chapter Progress */}
      <div className="max-w-4xl mx-auto mt-4 bg-white shadow-sm rounded-lg p-4">
        <div className="w-full bg-stone-200 rounded-full h-2">
          <div 
            className="bg-stone-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(Number(currentPage) / chapter.pages) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterTemplate;