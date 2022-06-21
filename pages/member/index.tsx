import OverViewContent from "../../components/organisms/OverViewContent";
import SideBar from "../../components/organisms/SideBar";

export default function Member() {
  return (
    <div>
      <section className="overview overflow-auto">
        <SideBar />
        <OverViewContent />
      </section>
    </div>
  );
}
