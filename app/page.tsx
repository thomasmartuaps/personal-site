import { BlogPosts } from "app/components/posts";
import { About } from "./components/about";

export default function Page() {
  return (
    <section className="grid grid-cols-2  gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tighter">
          Thomas Martua Parlindungan
        </h1>
        <h2 className="mb-6 text-xl text-neutral-600 dark:text-neutral-400">
          Frontend{" "}
          <span className="text-primary-500 font-semibold">Web & Mobile</span>{" "}
          Engineer
        </h2>
      </div>
      <div>
        <About />
        <div className="my-8">
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}
