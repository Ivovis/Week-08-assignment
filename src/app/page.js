import BlogList from "@/components/BlogList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center  p-4 pb-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-base pb-4 justify-center">
        My Journey Through Satisfactory
      </h1>
      <p className="text-sm text-justify pb-7">
        Hey there! I&apos;m Ivo, and this is where I document my adventures in
        Satisfactory by Coffee Stain Studios. If you&apos;re not familiar,
        Satisfactory is a first-person open-world factory building game set on
        an alien planet — a delightful mix of exploration, automation, and,
        let&apos;s be honest, a fair bit of trial, error and horror. In this
        blog, I&apos;ll take you through a few of my old play-throughs, from
        setting up my very first production line in a field to building
        sprawling, (in)efficient factories &#40;and the occasional chaotic
        mess&#41;. Expect progress updates, and later detailed blueprints,
        lessons learned, and maybe even a few tips to help you on your own
        industrial adventure.
      </p>
      <BlogList />
    </div>
  );
}
