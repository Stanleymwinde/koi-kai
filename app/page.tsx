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
import { CTAsection, WhyChooseUs } from "@/components/Services";

const page = () => {
  return (
    <>
      <Hero />
      <Insure />
      <Services />
      <AboutUs />
      <CoreValues />
      <ValueProposition />
      <WhyChooseUs />
      <Team />
      <div id="contact">
        <Contact />
        
        <CTAsection />

      </div>
    </>
  );
};

export default page;
