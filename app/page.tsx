import Project from "../src/components/project";
import Homepage from "../src/components/homepage";
import Planglist from "../src/components/planlist";
import Stats from "../src/components/stats";
import Workinp from "../src/components/wip";
import Footer from "../src/components/footer";
import '../styles/globals.css'
import Ct from "../src/components/ct";

export default function Page() {
    return (
      <>
      <Homepage/>
      {/* <Planglist/> */}
      <Workinp/>
      <Ct/>
      <Stats/>
      <Project/>
      <Footer/>
      </>
    );
  }