import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

const experiences = [
  {
    employer: "Photon Interactive",
    title: "Software Engineer",
    duration: "March 2024 - March 2025",
  },
  {
    employer: "Wide Technologies",
    title: "Frontend Engineer",
    duration: "Feb 2022 - March 2024",
  },
  {
    employer: "Pasaran.com",
    title: "Full-stack Engineer",
    duration: "Jan 2021 - Jan 2022",
  },
];

export function Experiences() {
  return (
    <div>
      <h1
        className="mb-6 text-2xl font-semibold tracking-tighter"
        id={"experiences"}
      >
        <span className="text-primary-500">Work</span> Experiences
      </h1>
      {experiences.map((job, i) => (
        <div
          key={i}
          className="flex flex-col space-y-1 mb-4"
          // href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 md:max-w-[150px] tabular-nums">
              {job.duration}
            </p>
            <div>
              <p className="text-neutral-900 max-md:text-xl dark:text-neutral-100 font-semibold tracking-tight">
                {job.employer}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {job.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
