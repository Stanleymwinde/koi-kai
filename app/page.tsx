import Insure from "@/components/common/Insure";
import {
  AboutUs,
  Contact,
  CoreValues,
  Hero,
  Services,
  Team,
  ValueProposition,
} from "@/components/Home";

const page = () => {
  return (
    <>
      <Hero />
      <Insure />
      <Services />
      <AboutUs />
      <CoreValues />
      <ValueProposition />
      <Team />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default page;
