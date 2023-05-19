import Project from "../src/components/project";
import Homepage from "../src/components/homepage";
import Planglist from "../src/components/planlist";
import Stats from "../src/components/stats";
import Workinp from "../src/components/wip";
import Footer from "../src/components/footer";

export default function Page() {
    return (
      <>
      <Homepage/>
      {/* <Planglist/> */}
      <Workinp/>
      <Stats/>
      <Project/>
      <Footer/>
      </>
    );
  }