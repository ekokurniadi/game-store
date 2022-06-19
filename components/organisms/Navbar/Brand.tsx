import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/">
      <a className="navbar-brand">
        <Image src="/icon/logo.svg" width={60} height={60} />
      </a>
    </Link>
  );
}
