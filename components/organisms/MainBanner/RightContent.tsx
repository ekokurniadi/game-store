import Illustrations from "./Illustrations";

export default function RightContent() {
  return (
    <div className="col-lg-6 col-12 d-lg-block d-none">
      <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
        <div className="position-relative" data-aos="zoom-in">
          <img src="/img/Header-1.png" className="img-fluid" alt="" />
          <Illustrations />
        </div>
      </div>
    </div>
  );
}
