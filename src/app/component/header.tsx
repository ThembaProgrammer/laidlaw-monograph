
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-serif text-2xl text-stone-800">
            Dr Laidlaw Monograph
          </Link>
          <nav className="flex space-x-8">
            <Link href="/table-content" className="text-stone-600 hover:text-stone-900">
              Chapters
            </Link>
            <Link href="/discussion" className="text-stone-600 hover:text-stone-900">
              Discussions
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}