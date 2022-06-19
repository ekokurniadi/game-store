import ReachedItem from "../../molecules/ReachedItem";
import ReachedLine from "./ReachedLine";

export default function ReachedContent() {
  return (
    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
      <ReachedItem count="290M+" title="Players Top Up" />
      <ReachedLine />
      <ReachedItem count="12.500" title="Games Available" />
      <ReachedLine />
      <ReachedItem count="99,9%" title="Happy Players" />
      <ReachedLine />
      <ReachedItem count="4.7" title="Rating Worldwide" />
    </div>
  );
}
