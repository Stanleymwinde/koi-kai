import { LocationEditIcon, MailIcon, PhoneIcon } from "lucide-react";
import {
  FaBuilding,
  FaCar,
  FaHardHat,
  FaHeart,
  FaPiggyBank,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { TbLocationDiscount } from "react-icons/tb";

export const marginX = { base: "3%", sm: "2%", md: "4%", lg: "6%" };

export const navItems = [
  {
    label: "Home",
    href: "/",
    // children: [
    //   { label: "Our Funds", href: "/individual/MMF&FIF" },
    //   { label: "Our Portfolios", href: "/#investing" },
    //   { label: "Go Global", href: "/global-investing" },
    // ],
  },
  {
    label: "About",
    href: "/AboutUs",
  },
  {
    label: "Services",
    href: "/Services",
  },
  {
    label: "Contact",
    href: "/Contact",
  },
];

export const MarginX = {
  base: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const contactsData = [
  {
    id: 1,
    label: "contact@kaiinsuranceagency.com",
    title: "Email Address",
    icon: MailIcon,
    link: `mailto:contact@kaiinsuranceagency.com`,
  },
  {
    id: 2,
    label: "0710 653 375",
    title: "NAIROBI Phone",
    link: `tel:0710653375`,
    icon: PhoneIcon,
  },
  {
    id: 3,
    icon: LocationEditIcon,
    title: "Address",
    label: "Millenium Business Park,Langata Road",
    link: "https://maps.app.goo.gl/edawWqg4TaBvwSfe8",
  },
  {
    id: 4,
    icon: TbLocationDiscount,
    title: "Operational hours",
    label: " Monday - Saturday 9:00AM & 05:00PM",
    link: "https://maps.app.goo.gl/edawWqg4TaBvwSfe8",
  },
];

export const TeamMates = [
  {
    name: "Priscilla W Ngirichi",
    role: "Founder & Principal Officer",
    imageUrl: "/images/Kui1.jpeg",
    qualifications: [
      "Degree in Management & Leadership (Management University of Africa)",
      "Diploma in Cooperative Management (Cooperative University)",
      "C.P.A (Strathmore University)",
      "Micro-M.B.A Program - Strathmore Business School",
      "Certificate of Proficiency (College of Insurance)",
    ],
  },
  {
    name: "Lilian Ngirichi",
    role: "Head of Strategy",
    imageUrl: "/images/Kui.jpeg",
    qualifications: ["Clarity Master"],
  },
  {
    name: "James Kamau",
    role: "Finance",
    imageUrl: "/images/Kui1.jpeg",
    qualifications: [
      "Bachelor's degree in Accounting",
      "Certified Public Accountant (CPA)",
      "Diploma in Insurance (College of Insurance)",
    ],
  },
  {
    name: "Smwinde",
    role: "Systems Administrator",
    imageUrl: "/images/Kui.jpeg",
    qualifications: [
      "Bachelor's degree in Information Technology",
      "Certified Information Systems Security Professional (CISSP)",
      "Microsoft Certified: Azure Solutions Architect Expert",
    ],
  },
];

export const FaqsData1 = [
  {
    value: "a",
    title: "What is the minimum investment amount for the various funds?​",
    text: "Currently, the minimum investment amount for all funds is KES 100,000. But clients who have below KES 100,000 can channel the funds through Chumz App.​",
  },
  {
    value: "b",
    title: "What is the minimum top-up amount for the various funds?​",
    text: "The minimum top-up amount for all funds is KES 10,000​",
  },
  {
    value: "c",
    title: "What hidden charges are there?",
    text: "There are none",
  },
  {
    value: "d",
    title: "Can I top up my account?",
    text: "You can contact our customer support team via whatsapp at +254709902700",
  },
  {
    value: "e",
    title: " Is there any locking period?​",
    text: "Only for Nabo KES Fixed Income Fund for a period of 6 months on the initial investment, subsequent top-ups are not locked.",
  },
  {
    value: "f",
    title: "Are the returns guaranteed?​",
    text: "No, we are not required to guarantee returns as per the CMA regulations as the assets we invest in don’t guarantee returns.​",
  },
];

export const missionVisionData = [
  {
    id: "mission",
    title: "Our Mission",
    image: "/images/Mission.jpeg",
    description: [
      "Kai Insurance Agency’s mission is to provide accessible, reliable, and customer-centered insurance solutions that protect individuals, families, and businesses against life’s uncertainties. We are committed to simplifying the insurance process through transparency, expertise, and personalized service, ensuring that every client receives the right coverage for their unique needs. With integrity at the core of our operations, Kai Insurance Agency strives to deliver fast, fair, and efficient support; especially during claims to give customers peace of mind and long-term financial security.",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    image: "/images/Vission.jpeg",
    description: [
      "Kai Insurance Agency envisions becoming one of the most trusted and innovative insurance partners in the region, known for setting new standards in service excellence, claims reliability, and client education. Our goal is to empower more people to make confident financial decisions by offering insurance solutions that evolve with changing risks, technologies, and customer expectations. Through continuous improvement and strong relationships with underwriting partners, Kai Insurance Agency aims to create a safer, more secure future for all the clients and communities we serve.",
    ],
  },
];

export const FaqsData = [
  {
    value: "a",
    title: "What types of insurance products are available in Kenya?",
    text: "Motor, medical, life, travel, home, personal accident, agriculture, business, and education insurance policies are available in Kenya.",
  },
  {
    value: "b",
    title: "What is an insurance premium?",
    text: "An insurance premium is the amount you pay—monthly, quarterly, or annually—to keep your insurance policy active.",
  },
  {
    value: "c",
    title: "What is an excess in insurance?",
    text: "Excess is the portion of a loss that you pay out of pocket before the insurer settles the remaining amount.",
  },
  {
    value: "d",
    title: "What documents are required to buy insurance?",
    text: "You will need a National ID or Passport, KRA PIN, a completed application form, and any product-specific documents required by the insurer.",
  },
  {
    value: "e",
    title: "What types of motor insurance are available in Kenya?",
    text: "Motor insurance options include Third-Party Only (TPO), Comprehensive cover, and COMESA cover.",
  },
  {
    value: "f",
    title: "Is motor insurance mandatory in Kenya?",
    text: "Yes. By law, all motor vehicles must at least have Third-Party Only (TPO) insurance.",
  },
  {
    value: "g",
    title: "What does medical insurance cover?",
    text: "Medical insurance may cover inpatient, outpatient, dental, optical, maternity services, and medical evacuation depending on the policy.",
  },
  {
    value: "h",
    title: "What is a waiting period in medical insurance?",
    text: "A waiting period is the time after policy activation during which certain benefits—such as maternity, pre-existing, congenital, or chronic conditions—cannot be claimed.",
  },
  {
    value: "i",
    title: "Are pre-existing conditions covered?",
    text: "Yes, pre-existing conditions may be covered subject to waiting periods. Corporate and SME covers often have no waiting periods.",
  },
  {
    value: "j",
    title: "What types of life insurance covers are available?",
    text: "Life insurance options include term life, whole life, education/endowment plans, and investment-linked policies.",
  },
  {
    value: "k",
    title: "Can I cancel my life insurance policy?",
    text: "Yes. Cancelling before 3 years results in loss of all contributions. After 36 months, you may receive a surrender value, which is lower than the total premiums paid.",
  },
  {
    value: "l",
    title: "What does home or property insurance cover?",
    text: "Home insurance covers building damage, household contents, theft, fire, floods, and personal liability.",
  },
  {
    value: "m",
    title: "What types of business insurance are available?",
    text: "Common business covers include fire, burglary, WIBA, employer liability, professional indemnity, cyber risk insurance, goods in transit, carriers liability, and all-risks insurance.",
  },
  {
    value: "n",
    title: "What does travel insurance cover?",
    text: "Travel insurance covers medical emergencies, lost baggage, trip delays, and flight accidents. It is often required for visa applications.",
  },
  {
    value: "o",
    title: "Why might an insurance claim be delayed or rejected?",
    text: "Claims may be delayed due to missing documentation. Claims may be declined if they are fraudulent or below the payable excess amount.",
  },
  {
    value: "p",
    title: "What can void a motor vehicle insurance claim?",
    text: "Motor claims can be voided due to drunk driving, use of an unlicensed driver, fraud or misrepresentation, delayed reporting, unauthorized vehicle use, or driving without a valid or provisional license.",
  },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  includes: string[];
  icon: any;
  image: string | null;
};

export const services: Service[] = [
  {
    image: "/images/health.jpeg",
    slug: "medical-insurance",
    icon: FaHeart,
    title: "Medical Insurance",
    description:
      "We offer flexible and comprehensive medical insurance plans that protect individuals, families, and organizations from unexpected healthcare costs.",
    includes: ["Individual Medical Cover", "Group Medical Cover"],
  },
  {
    image: "/images/car.jpeg",
    slug: "motor-vehicle-insurance",
    icon: FaCar,
    title: "Motor Vehicle Insurance",
    description:
      "Whether for private or commercial use, our motor insurance plans safeguard your vehicle.",
    includes: ["Private Motor", "Commercial Motor", "Special Motor Vehicles"],
  },
  {
    image: "/images/hero-bg2.jpeg",
    slug: "wiba-employers-liability",
    icon: FaShieldAlt,
    title: "WIBA & Employers' Liability",
    description:
      "Ensure the safety and well-being of your workforce with statutory and additional protections.",
    includes: [
      "Cover against employment-related liabilities",
      "Comprehensive workplace protection",
    ],
  },
  {
    image: "/images/business.jpeg",
    slug: "business-asset-insurance",
    icon: FaBuilding,
    title: "Business & Asset Insurance",
    description:
      "Protect your business assets, property, and operations from risks.",
    includes: [
      "Fire & Special Perils",
      "Burglary",
      "All Risks",
      "Public Liability",
    ],
  },
  {
    image: "/images/new-life.jpeg",
    slug: "life-insurance",
    icon: FaUsers,
    title: "Life Insurance",
    description: "Preserve your family's future with life insurance solutions.",
    includes: ["Whole Life Cover", "Education Plans", "Family Protection"],
  },
  {
    image: "/images/pension.jpeg",
    slug: "pension-covers",
    icon: FaPiggyBank,
    title: "Pension Covers",
    description: "Our pension solutions ensure you retire with confidence.",
    includes: [
      "Personal Pension Plans",
      "Corporate Pension Solutions",
      "Retirement Savings",
    ],
  },
  {
    image: "/images/contractors.jpeg",
    slug: "contractors-all-risks",
    icon: FaHardHat,
    title: "Contractors' All Risks",
    description: "Secure your construction projects from start to finish.",
    includes: [
      "Contract Works Coverage",
      "Machinery & Materials",
      "Site Liabilities & Employee Protection",
    ],
  },
];
