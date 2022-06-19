import Link from "next/link";
import StoryButton from "./Button";
import Description from "./Description";

export default function StoryInfo() {
  return (
    <div className="col-lg-5 col-12 ps-lg-60">
      <div className="">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Win the battle.
          <br />
          Be the Champion.
        </h2>
        <Description />
        <StoryButton />
      </div>
    </div>
  );
}
