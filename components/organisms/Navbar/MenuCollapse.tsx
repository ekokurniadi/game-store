import Auth from "./Auth";
import Menu from "./Menu";

export default function MenuCollapse() {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
        <Menu title="Home" active />
        <Menu title="Games" />
        <Menu title="Rewards" />
        <Menu title="Discover" />
        <Menu title=" Global Rank" />
        <Auth />
      </ul>
    </div>
  );
}
