import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* admin page */}
      <Link href="/admin">
        <button className="mt-7 cursor-pointer border border-blue p-4 rounded-md bg-black text-white">
          Click me
        </button>
      </Link>
    </main>
  );
}
