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
    href: "/institutional",
    // children: [
    //   { label: "Our Approach", href: "/institutional/treasury" },
    //   { label: "Resources", href: "/tools_and_resources" },
    // ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Team",
    href: "/Team",
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
