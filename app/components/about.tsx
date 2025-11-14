const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const experience = currentYear - 2021;

export function About() {
  return (
    <div id={"about"}>
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
        About
        <span className="text-primary-500"> Me</span>
      </h1>
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
        {` as a software engineer, and currently looking to expand my reach and further my personal branding. I am open to both job opportunities or freelance offers.`}
      </p>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        Outside of software engineering, I enjoy a variety of activities in my
        spare time. My go-to physical activity is cycling. I also enjoy a wide
        variety of movies and music, which includes anime, manga, and J-pop. I'm
        a bit of an Ado fan, too.
      </p>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
        {" "}
        Contact me if you are interested!
      </p>
    </div>
  );
}
