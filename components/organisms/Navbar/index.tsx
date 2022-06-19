import Brand from "./Brand";
import MenuCollapse from "./MenuCollapse";
import ToggleMenu from "./ToggleMenu";

export default function Navbar() {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <Brand />
            <ToggleMenu />
            <MenuCollapse />
          </div>
        </nav>
      </section>
    </div>
  );
}
