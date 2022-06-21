import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="icon-menu"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transaction"
            icon="icon-menu-transaction"
            href="member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="icon-menu-messages" href="/member" />
          <MenuItem title="Card" icon="icon-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="icon-menu-reward" href="/member" />
          <MenuItem
            title="Setting"
            icon="icon-menu-setting"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="icon-menu-logout" href="/signin" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
