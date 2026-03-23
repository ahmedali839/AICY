'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 mb-4">
            404
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
