"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-medium">Easy Blogg</h1>
      <div className="flex items-center justify-around p-10">
        <button
          className="mx-5 bg-black text-white p-3 rounded-md font-medium"
          onClick={() => router.push("/blog-list")}
        >
          Visit all blogs
        </button>
        <button
          className="mx-5 bg-black text-white p-3 rounded-md font-medium"
          onClick={() => router.push("/add-blog")}
        >
          Add new blog
        </button>
      </div>
    </main>
  );
}
