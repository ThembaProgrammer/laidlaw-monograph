import Link from 'next/link';

export default function Sidebar() {
  const chapters = [
    { id: '1', title: 'Introduction' },
    { id: '2', title: 'Chapter 1' },
    { id: '3', title: 'Chapter 2' },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen p-6">
      <nav>
        <h2 className="text-lg font-serif mb-4 text-stone-800">Table of Contents</h2>
        <ul className="space-y-2">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link
                href={`/chapters/${chapter.id}`}
                className="text-stone-600 hover:text-stone-900"
              >
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}