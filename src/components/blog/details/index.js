"use client";

export default function BlogDetailsComponent({ blogDetails }) {
  return (
    <div>
      <p className="text-center font-bold p-10 text-6xl">
        {blogDetails?.title}
      </p>
      <p className="text-lg px-5">{blogDetails?.description}</p>
    </div>
  );
}
