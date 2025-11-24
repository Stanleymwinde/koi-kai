import { LocationEditIcon, MailIcon, PhoneIcon } from "lucide-react";
import { TbLocationDiscount } from "react-icons/tb";

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
    label: "Services",
    href: "https://kai-insurance-one.vercel.app/services",
  },
  {
    label: "About",
    href: "/AboutUs",
  },
  {
    label: "Contact",
    href: "https://kai-insurance-one.vercel.app/contact",
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
    imageUrl: "/images/logo.jpg",
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
    imageUrl: "/images/logo.jpg",
    qualifications: ["Clarity Master"],
  },
  {
    name: "James Kamau",
    role: "Finance",
    imageUrl: "/images/logo.jpg",
    qualifications: [
      "Bachelor's degree in Accounting",
      "Certified Public Accountant (CPA)",
      "Diploma in Insurance (College of Insurance)",
    ],
  },
  {
    name: "Smwinde",
    role: "Systems Administrator",
    imageUrl: "/images/logo.jpg",
    qualifications: [
      "Bachelor's degree in Information Technology",
      "Certified Information Systems Security Professional (CISSP)",
      "Microsoft Certified: Azure Solutions Architect Expert",
    ],
  },
];

export const missionVisionData = [
  {
    id: "mission",
    title: "Our Mission",
    image: "/images/hero-bg.jpg",
    description: [
      "Kai Insurance Agency’s mission is to provide accessible, reliable, and customer-centered insurance solutions that protect individuals, families, and businesses against life’s uncertainties. They are committed to simplifying the insurance process through transparency, expertise, and personalized service, ensuring that every client receives the right coverage for their unique needs. With integrity at the core of their operations, Kai Insurance Agency strives to deliver fast, fair, and efficient support; especially during claims to give customers peace of mind and long-term financial security.",
     
    ]
  },
  {
    id: "vision",
    title: "Our Vision",
    image: "/images/hero-bg.jpg",
    description: [
      "Kai Insurance Agency envisions becoming one of the most trusted and innovative insurance partners in the region, known for setting new standards in service excellence, claims reliability, and client education. Their goal is to empower more people to make confident financial decisions by offering insurance solutions that evolve with changing risks, technologies, and customer expectations. Through continuous improvement and strong relationships with underwriting partners, Kai Insurance Agency aims to create a safer, more secure future for all the clients and communities they serve.",
    
    ]
  }
];
