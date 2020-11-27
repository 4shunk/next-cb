import Link from "next/link";
import Image from "next/image";

export default function IndexPage() {
  const date = new Date();
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <Image
        width={1500}
        height={1000}
        layout="responsive"
        src="https://images.unsplash.com/photo-1606248627653-f3d6b573deb8"
      />
    </div>
  );
}
