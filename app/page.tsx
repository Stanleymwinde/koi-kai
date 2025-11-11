import {
  About,
  Contact,
  CoreValues,
  Hero,
  Services,
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
      <Contact />
    </>
  );
};

export default page;
