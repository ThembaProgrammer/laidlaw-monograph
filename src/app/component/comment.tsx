import { useState } from 'react';

export default function Comments() {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    setComment('');
  };

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-xl font-serif mb-6">Discussion</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border rounded-lg"
          rows={4}
          placeholder="Share your thoughts..."
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700"
        >
          Post Comment
        </button>
      </form>
      
      <div className="space-y-6">
        {/* Comment list will go here */}
      </div>
    </div>
  );
}