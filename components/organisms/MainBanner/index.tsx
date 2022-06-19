import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function MainBanner() {
  return (
    <section className="header pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row gap-lg-0 gap-5">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </section>
  );
}
