/** Bump this whenever you replace images in `public/members/` so browsers skip cached copies. */
export const MEMBER_PHOTO_VERSION = "20250417";

export type Member = {
  name: string;
  role?: string;
  photoSrc?: string;
};

export type MemberGroup = {
  title: string;
  members: Member[];
};

const ANDREAS_PHOTO = "/members/andreas-trujillo.jpeg";
const YUTO_PHOTO = "/members/yuto-shingai.png";

export const EXECUTIVE_BOARD: MemberGroup = {
  title: "Executive board",
  members: [
    {
      name: "Andreas Trujillo",
      role: "President · Electrical lead",
      photoSrc: ANDREAS_PHOTO,
    },
    {
      name: "Yuto Shingai",
      role: "Vice president · Mechanical lead",
      photoSrc: YUTO_PHOTO,
    },
  ],
};

export const PROJECT_LEAD_SUBSECTIONS: MemberGroup[] = [
  {
    title: "Mechanical leads",
    members: [
      { name: "Geetha Nallappa", photoSrc: "/members/geetha-nallappa.jpeg" },
      { name: "Izzy Schlettert", photoSrc: "/members/izzy-schlettert.jpeg" },
      { name: "Cameron Moore", photoSrc: "/members/cameron-moore.jpeg" },
      { name: "Shiven Sandhu", photoSrc: "/members/shiven-sandhu.jpeg" },
      { name: "Argi Protopapadakis", photoSrc: "/members/argi-protopapadakis.jpeg" },
    ],
  },
  {
    title: "Electrical leads",
    members: [
      { name: "Kyle Rasmussen", photoSrc: "/members/kyle-rasmussen.jpeg" },
      { name: "Yashas Gogia", photoSrc: "/members/yashas-gogia.jpeg" },
      { name: "Simon Egner", photoSrc: "/members/simon-egner.jpeg" },
    ],
  },
  {
    title: "Software leads",
    members: [
      { name: "Justin Wu", photoSrc: "/members/justin-wu.jpeg" },
      { name: "Xander Terry", photoSrc: "/members/xander-terry.jpeg" },
      { name: "Blake Robinson", photoSrc: "/members/blake-robinson.png" },
    ],
  },
  {
    title: "Business leads",
    members: [
      { name: "Shaurya Bairaria", photoSrc: "/members/shaurya-bairaria.jpeg" },
      { name: "Gavin Horton", photoSrc: "/members/gavin-horton.jpeg" },
    ],
  },
];
