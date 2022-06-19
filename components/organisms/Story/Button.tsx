import Link from "next/link";

export default function StoryButton() {
  return (
    <div className="d-md-block d-flex flex-column w-100">
      <Link href="/">
        <a className="btn btn-read text-lg rounded-pill" role="button">
          Read Story
        </a>
      </Link>
    </div>
  );
}
