'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-orange-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4v2m0 0H9m3 0h3m-6-8H9a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-3V4"
            />
          </svg>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            Oops!
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-4">
            Something went wrong
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            We apologize for the inconvenience. An unexpected error occurred. Please try again.
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
        >
          Try Again
        </button>

        <p className="text-slate-600 mt-8">
          <a href="/" className="text-orange-600 hover:text-rose-600 font-semibold transition-colors">
            Return to Home
          </a>
        </p>
      </div>
    </div>
  );
}
