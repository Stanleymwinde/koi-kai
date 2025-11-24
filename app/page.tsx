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
