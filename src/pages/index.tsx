import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white text-center flex justify-center items-center">
      <div>
        <Link href="/lock" target="_blank">
          <div className="bg-slate-700 hover:bg-slate-500 hover:font-bold w-64 py-2 border border-white rounded-xl mb-6">
            LOCK ASSETS
          </div>
        </Link>

        <Link href="/unlock" target="_blank">
          <div className="bg-slate-700 hover:bg-slate-500 hover:font-bold w-64 py-2 border border-white rounded-xl">
            UNLOCK ASSETS
          </div>
        </Link>
      </div>
    </div>
  );
}
