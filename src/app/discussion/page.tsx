'use client'
import { useState } from 'react';
import { ThumbsUp, Flag, Reply, User, Search } from 'lucide-react';

const DiscussionTemplate = () => {
    const [comment, setComment] = useState('');
    const [filter, setFilter] = useState('recent');

    // Example discussion data
    const discussions = [
        {
            id: 1,
            user: "Alice Reader",
            avatar: "/api/placeholder/32/32",
            chapter: "Chapter 3: Core Principles",
            timestamp: "2 hours ago",
            content: "The explanation of the fundamental theorem in this chapter was particularly illuminating. I especially appreciated how it connected to the previous chapter's concepts.",
            likes: 12,
            replies: [
                {
                    id: 101,
                    user: "Bob Scholar",
                    avatar: "/api/placeholder/32/32",
                    content: "I agree! The visual diagrams really helped clarify the relationship between the concepts.",
                    timestamp: "1 hour ago",
                    likes: 5
                }
            ]
        },
        {
            id: 2,
            user: "Carol Academic",
            avatar: "/api/placeholder/32/32",
            chapter: "Chapter 2: Basic Concepts",
            timestamp: "5 hours ago",
            content: "Could someone help clarify the second example? I'm having trouble understanding how it relates to the main theorem.",
            likes: 8,
            replies: []
        }
    ];

    return (
        <div className="min-h-screen bg-stone-100 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-serif text-stone-800 mb-2">Book Discussions</h1>
                        <p className="text-stone-600">Join the conversation about various chapters and topics</p>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search discussions..."
                                className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                            />
                        </div>
                        <div className="flex gap-4">
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="px-4 py-2 border border-stone-200 rounded-lg bg-white"
                            >
                                <option value="recent">Most Recent</option>
                                <option value="popular">Most Popular</option>
                                <option value="unanswered">Unanswered</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* New Discussion Form */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-serif text-stone-800 mb-4">Start a New Discussion</h2>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center">
                                <User className="text-stone-500" size={20} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <select className="w-full px-4 py-2 mb-4 border border-stone-200 rounded-lg bg-white">
                                <option value="">Select a chapter</option>
                                <option value="1">Chapter 1: Introduction</option>
                                <option value="2">Chapter 2: Basic Concepts</option>
                                <option value="3">Chapter 3: Core Principles</option>
                            </select>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Share your thoughts or questions..."
                                className="w-full p-4 border border-stone-200 rounded-lg mb-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-stone-500"
                            />
                            <button className="px-6 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors">
                                Post Discussion
                            </button>
                        </div>
                    </div>
                </div>

                {/* Discussions List */}
                <div className="space-y-6">
                    {discussions.map((discussion) => (
                        <div key={discussion.id} className="bg-white shadow-lg rounded-lg p-6">
                            {/* Discussion Header */}
                            <div className="flex items-center gap-4 mb-4">
                            <User className="text-stone-500" size={20} />
                                <div className="flex-1">
                                    <h3 className="font-medium text-stone-800">{discussion.user}</h3>
                                    <div className="flex items-center gap-2 text-sm text-stone-500">
                                        <span>{discussion.chapter}</span>
                                        <span>•</span>
                                        <span>{discussion.timestamp}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Discussion Content */}
                            <p className="text-stone-700 mb-4">{discussion.content}</p>

                            {/* Discussion Actions */}
                            <div className="flex items-center gap-6 mb-6">
                                <button className="flex items-center gap-2 text-stone-500 hover:text-stone-700">
                                    <ThumbsUp size={18} />
                                    <span>{discussion.likes}</span>
                                </button>
                                <button className="flex items-center gap-2 text-stone-500 hover:text-stone-700">
                                    <Reply size={18} />
                                    <span>Reply</span>
                                </button>
                                <button className="flex items-center gap-2 text-stone-500 hover:text-stone-700">
                                    <Flag size={18} />
                                    <span>Report</span>
                                </button>
                            </div>

                            {/* Replies */}
                            {discussion.replies.length > 0 && (
                                <div className="ml-8 pl-6 border-l-2 border-stone-100">
                                    {discussion.replies.map((reply) => (
                                        <div key={reply.id} className="mb-4 last:mb-0">
                                            <div className="flex items-center gap-4 mb-2">
                                                <User className="text-stone-500" size={20} />
                                                <div>
                                                    <h4 className="font-medium text-stone-800">{reply.user}</h4>
                                                    <span className="text-sm text-stone-500">{reply.timestamp}</span>
                                                </div>
                                            </div>
                                            <p className="text-stone-700 mb-2">{reply.content}</p>
                                            <div className="flex items-center gap-6">
                                                <button className="flex items-center gap-2 text-stone-500 hover:text-stone-700">
                                                    <ThumbsUp size={16} />
                                                    <span>{reply.likes}</span>
                                                </button>
                                                <button className="flex items-center gap-2 text-stone-500 hover:text-stone-700">
                                                    <Reply size={16} />
                                                    <span>Reply</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiscussionTemplate;