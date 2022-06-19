import FooterBrand from "./FooterBrand";
import Menu from "./Menu";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <FooterBrand />
            <Menu />
          </div>
        </div>
      </footer>
    </section>
  );
}
