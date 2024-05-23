"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Easy Blogg</h1>
      <div>
        <button onClick={() => router.push('/blog-list')}>Visit all blogs</button>
        <button onClick={() => router.push('/add-blog')}>Add new blog</button>
      </div>
    </main>
  );
}
