import FooterMenuItem from "./FooterMenuItem";

type menuObject = {
  title: string;
  href: string;
};

interface FooterItemsProps {
  title: string;
  menu: menuObject[];
}

export default function FooterItems(props: FooterItemsProps) {
  const { title, menu } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {menu.map((element, i) => (
          <FooterMenuItem title={element.title} href={element.href} key={i} />
        ))}
      </ul>
    </div>
  );
}
