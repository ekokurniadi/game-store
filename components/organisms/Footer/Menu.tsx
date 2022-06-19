import FooterItems from "../../molecules/FooterItem";

export default function Menu() {
  return (
    <div className="col-lg-8 mt-lg-0 mt-20">
      <div className="row gap-sm-0">
        <FooterItems
          title="Company"
          menu={[
            {
              title: "About Us",
              href: "/",
            },
            {
              title: "Press Release",
              href: "/",
            },
            {
              title: "Terms of Use",
              href: "/",
            },
            {
              title: "Privacy & Policy",
              href: "/",
            },
          ]}
        />
        <FooterItems
          title="Support"
          menu={[
            {
              title: "Refund Policy",
              href: "/",
            },
            {
              title: "Unlock Rewards",
              href: "/",
            },
            {
              title: "Live Chatting",
              href: "/",
            },
          ]}
        />
        <FooterItems
          title="Connect"
          menu={[
            {
              title: "hi@store.gg",
              href: "/",
            },
            {
              title: "team@store.gg",
              href: "/",
            },
            {
              title: "Pasific 12, Jakarta Selatan",
              href: "/",
            },
            {
              title: "021 - 1122 - 9090",
              href: "/",
            },
          ]}
        />
      </div>
    </div>
  );
}
