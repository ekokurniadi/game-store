import Footer from "./footer";
import MenuItem from "./MenuItem";
import Profile from "./profile";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="icon-menu" active />
          <MenuItem title="Transaction" icon="icon-menu-transaction" />
          <MenuItem title="Messages" icon="icon-menu-messages" />
          <MenuItem title="Card" icon="icon-menu-card" />
          <MenuItem title="Rewards" icon="icon-menu-reward" />
          <MenuItem title="Setting" icon="icon-menu-setting" />
          <MenuItem title="Log Out" icon="icon-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
