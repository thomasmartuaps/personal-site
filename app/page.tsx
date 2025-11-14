import { About } from "./components/about";
import { Experiences } from "./components/experiences";
import Header from "./components/header";

const skills = [
  {
    category: "Frontend",
    tech: "React, React Native, NextJs, Typescript, HTML & CSS, Redux, Context API, Tailwind",
  },
  {
    category: "Backend",
    tech: "NodeJs, Express, NestJs, Typescript, MongoDB, PostgreSQL",
  },
  {
    employer: "Pasaran.com",
    title: "Full-stack Engineer",
    duration: "Jan 2021 - Jan 2022",
  },
];

export default function Page() {
  return (
    <section className="lg:flex lg:justify-between lg:gap-4 ">
      <div className="lg:py-24 lg:sticky lg:top-0 lg:max-h-screen">
        <Header />
      </div>
      <div className="lg:py-24 lg:max-w-xl">
        <About />
        <div className="my-8">
          <Experiences />
          <div className="my-8">
            <h1
              className="mb-6 text-2xl font-semibold tracking-tighter"
              id={"skills"}
            >
              Engineering <span className="text-primary-500">Skills</span>
            </h1>
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col space-y-1 mb-4"
                // href={`/blog/${post.slug}`}
              >
                <div>
                  <p className="text-neutral-900 text-xl dark:text-neutral-100 font-semibold tracking-tight">
                    {skill.category}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                    {skill.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
