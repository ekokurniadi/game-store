import SideBar from "../../../components/organisms/SideBar";
import TransactionContentItem from "../../../components/organisms/TransactionContentItem";

export default function Transactions() {
  return (
    <div>
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContentItem />
      </section>
    </div>
  );
}
