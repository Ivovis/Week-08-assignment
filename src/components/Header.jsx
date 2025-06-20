import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className=" justify-items-center p-4 pb-0 font-[family-name:var(--font-geist-sans)] flex justify-around">
        <Link href="/">
          <h1> HOME </h1>
        </Link>
        <Link href="/about">
          <h1> About </h1>
        </Link>
      </div>
    </>
  );
}
