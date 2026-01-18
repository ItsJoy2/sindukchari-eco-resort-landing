import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 text-black px-6">
      <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl max-w-md">
        <h1 className="text-7xl font-extrabold  mb-4">404</h1>
        <p className="mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
