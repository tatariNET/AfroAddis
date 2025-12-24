export type MegaMenuItem = {
  label: string;
  description?: string;
  href: string;
};

export type MegaMenuColumn = {
  title: string;
  items: MegaMenuItem[];
};

export type MegaMenuGroup = {
  label: string;
  href?: string;
  badge?: string;
  columns: MegaMenuColumn[];
  highlight?: {
    title: string;
    description: string;
    href: string;
  };
};

export const megaMenuGroups: MegaMenuGroup[] = [
  {
    label: "About",
    href: "/about",
    columns: [
      {
        title: "Company",
        items: [
          { label: "Company profile", href: "/about/company#company" },
          { label: "Governance & board", href: "/about/company#governance" },
          {
            label: "Achievements & awards",
            href: "/about/company#achievements",
          },
          { label: "Resources", href: "/about/company#resources" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Corporate timeline", href: "/about/resources#timeline" },
          { label: "News & updates", href: "/about/resources#news" },
          { label: "Resources", href: "/about/resources#resources" },
        ],
      },
    ],
  },
  {
    label: "Services",
    columns: [
      {
        title: "Core Business Services",
        items: [
          { label: "Trading", href: "/services/core#trading" },
          { label: "Import", href: "/services/core#import" },
          { label: "Export", href: "/services/core#export" },
          {
            label: "Manufacturing",
            href: "/services/core#manufacturing",
          },
        ],
      },
      {
        title: "Retail & Consumer Solutions",
        items: [
          {
            label: "Household Retail & Credit",
            href: "/services/retail#retail",
          },
          {
            label: "Strategic Partnership Programs",
            href: "/services/retail#partnerships",
          },
          {
            label: "After-Sales Support Services",
            href: "/services/retail#support",
          },
        ],
      },
    ],
  },
  {
    label: "Products",
    href: "//products",
    columns: [
      {
        title: "Household Goods",
        items: [
          {
            label: "Electronics",
            href: "/products/household#home-appliances",
          },
          {
            label: "Furniture",
            href: "/products/household#furniture-decor",
          },
        ],
      },
      {
        title: "Electronics & Tech",
        items: [
          {
            label: "Smartphones & Tablets",
            href: "/products/electronics#smartphones-tablets",
          },
          {
            label: "Computers & Accessories",
            href: "/products/electronics#computers-accessories",
          },
        ],
      },
    ],
  },
  {
    label: "Working With",
    href: "/#working-with",
    columns: [],
  },
];

export const primaryLinks = [
  { label: "Magazines", href: "/magazines" },
  { label: "Contact", href: "/contact" },
];
