import { LocationEditIcon, MailIcon, PhoneIcon } from "lucide-react";
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
    image: "/images/missioni.jpeg",
    description: [
      "Kai Insurance Agency’s mission is to provide accessible, reliable, and customer-centered insurance solutions that protect individuals, families, and businesses against life’s uncertainties. We are committed to simplifying the insurance process through transparency, expertise, and personalized service, ensuring that every client receives the right coverage for their unique needs. With integrity at the core of our operations, Kai Insurance Agency strives to deliver fast, fair, and efficient support; especially during claims to give customers peace of mind and long-term financial security.",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    image: "/images/vision.jpeg",
    description: [
      "Kai Insurance Agency envisions becoming one of the most trusted and innovative insurance partners in the region, known for setting new standards in service excellence, claims reliability, and client education. Our goal is to empower more people to make confident financial decisions by offering insurance solutions that evolve with changing risks, technologies, and customer expectations. Through continuous improvement and strong relationships with underwriting partners, Kai Insurance Agency aims to create a safer, more secure future for all the clients and communities we serve.",
    ],
  },
];

export const FaqsData = [
  {
    value: "a",
    title: "What are your business hours?​",
    text: "Our offices are open Monday to Friday, 8:30 AM – 5:00 PM. We are closed on weekends and public holidays.​",
  },
  {
    value: "b",
    title: "How long does it take to process a claim?​",
    text: "Claims are typically processed within 5–10 business days, depending on the type and complexity of the claim.​",
  },
  {
    value: "c",
    title: "Do I need to visit your office to get a quote?",
    text: "No, you can request a quote directly through our website or by contacting our support team via phone or email.",
  },
  {
    value: "d",
    title: "Where are you located?",
    text: "We are based at Millenium business park on Langata-Karen Rd - 2nd Floor Nairobi, Kenya. You can also find us on Google Maps for easy directions.",
  },
];
