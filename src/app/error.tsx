"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-red-500 mb-6">
          Something went wrong. Please try again or come back later.
        </p>

        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
