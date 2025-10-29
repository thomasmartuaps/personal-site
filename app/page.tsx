import { BlogPosts } from "app/components/posts";
import { About } from "./components/about";
import { Experiences } from "./components/experiences";
import Header from "./components/header";

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
        </div>
      </div>
    </section>
  );
}
