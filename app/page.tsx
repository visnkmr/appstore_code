import Project from "../src/components/project";
import Homepage from "../src/components/homepage";
// import Planglist from "../src/components/planlist";
// import Stats from "../src/components/stats";
import Workinp from "../src/components/wip";
import Footer from "../src/components/footer";
import '../styles/globals.css'
import Ct from "../src/components/ct";
import Commits from "../src/components/commits";
// import dwc from "../src/dealcommits";
// import gtr from "./api/gtr";

export default async function Page() {
  // console.log("hello world")
  // console.log(JSON.parse(gtr()))
  // console.log(dwc())
  // console.log("hello")

    return (
      <>
      <Homepage/>
      {/* <Planglist/> */}
      <Commits/>
      {await Workinp()}
      {await Project()}
      <Ct/>
      <Footer/>
      </>
    );
  }