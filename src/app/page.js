import BlogList from "@/components/BlogList";

import Link from "next/link";

export default async function Home({ searchParams }) {
  const qString = await searchParams;

  let showInverted = false;
  if (qString.sort === "new") showInverted = false;
  else if (qString.sort === "old") showInverted = true;

  return (
    <div className="items-center justify-items-center  p-4 pb-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-base pb-4 text-center">
        My Journey Through Satisfactory
      </h1>

      <p className="text-sm text-justify pb-7">
        Hey there! I&apos;m Chris, and this is where I document my adventures in
        Satisfactory by Coffee Stain Studios. If you&apos;re not familiar,
        Satisfactory is a first-person open-world factory building game set on
        an alien planet — a delightful mix of exploration, automation, and,
        let&apos;s be honest, a fair bit of trial, error and horror. In this
        blog, I&apos;ll take you through a few of my old play-through&apos;s,
        from setting up my very first production line in a field to building
        sprawling, (in)efficient factories &#40;and the occasional chaotic
        mess&#41;. Expect progress updates, and later detailed blueprints,
        lessons learned, and maybe even a few tips to help you on your own
        industrial adventure.
      </p>
      <div className="flex justify-center">
        <Link href={"/?sort=new"} className="bg-blue-200 rounded-2xl p-2 m-2 ">
          Sort Newest
        </Link>
        <Link href={"/?sort=old"} className="bg-blue-200 rounded-2xl p-2 m-2 ">
          Sort Oldest
        </Link>
      </div>
      <BlogList invert={showInverted} />
    </div>
  );
}
