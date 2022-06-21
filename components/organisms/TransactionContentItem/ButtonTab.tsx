import cx from "classnames";
import Link from "next/link";
interface ButtonTabProps {
  title: string;
  active?: boolean;
  href: string;
  filter?: string;
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, active = false, href = "/", filter = "*" } = props;
  const classItem = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });
  return (
    <Link href={href}>
      <a data-filter={filter} className={classItem}>
        {title}
      </a>
    </Link>
  );
}
