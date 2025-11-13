import {
  About,
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
      <About />
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
