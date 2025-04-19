"use client";

import { useState } from "react";
import { tags, works } from "../worksdata";

export default function Gallery() {
  const [selectedTag, setSelectedTag] = useState("все");

  const filteredWorks =
    selectedTag === "все"
      ? works
      : works.filter((work) => work.tags.includes(selectedTag));

  return (
    <section className="p-4">
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full border transition ${
                selectedTag === tag
                ? "bg-[var(--button-bg)] text-white"
                : "bg-[var(--button-hover-bg)] text-[var(--button-text)] border-[var(--button-border)] hover:bg-[var(--button-hover-bg)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="h-auto overflow-y-auto">
        <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="break-inside-avoid  rounded-lg bg-white"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto object-cover"
              />
              <div className="px-3 py-2">
                <h6 className="text-md font-semibold">{work.title}</h6>
                <p className="text-xs text-gray-500">{work.tags.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
