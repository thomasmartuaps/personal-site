import { BlogPosts } from "app/components/posts";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const experience = currentYear - 2021;

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Thomas Martua Parlindungan
      </h1>
      <hr></hr>
      <h2 className="mb-6 text-xl text-neutral-600 dark:text-neutral-400">
        Frontend{" "}
        <span className="text-mint-500 font-semibold">Web & Mobile</span>{" "}
        Engineer
      </h2>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        {`Hi, I’m Thomas — a frontend engineer who loves turning ideas into intuitive, interactive, and visually engaging web experiences. Whether it’s optimizing performance, perfecting animations, or collaborating on design systems, I’m always focused on making the web a more delightful place for users.`}
      </p>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        {`I have ${experience} years of experience working for corporates such as `}
        <span className="text-white dark:hover:text-blue-500">
          Photon Interactive
        </span>
        {` and `}
        <span className="text-white dark:hover:text-blue-500">
          Wide Technologies
        </span>
        {` as a software engineer, and currently looking to expand my reach and further my personal branding. I am open to both job opportunities or freelance offers. Contact me if you are interested!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
