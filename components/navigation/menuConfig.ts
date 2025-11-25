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
          { label: "Company profile", href: "/about" },
          { label: "Governance & board", href: "/governance" },
          { label: "Achievements & awards", href: "/achievements" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Corporate timeline", href: "/about#timeline" },
          { label: "Sustainability & CSR", href: "/resources" },
          { label: "News & updates", href: "/resources#news" },
        ],
      },
    ],
    highlight: {
      title: "Download corporate profile",
      description: "Overview of Afro Addis’ governance, verticals, and capabilities.",
      href: "/resources",
    },
  },
  {
    label: "Divisions",
    columns: [
      {
        title: "Core divisions",
        items: [
          { label: "Import division", href: "/import" },
          { label: "Export division", href: "/export" },
          { label: "Manufacturing", href: "/manufacturing" },
        ],
      },
      {
        title: "Consumer & retail",
        items: [
          { label: "Household retail & credit", href: "/retail" },
          { label: "Strategic partners", href: "/partners#alliances" },
          { label: "After-sales programs", href: "/retail#service" },
        ],
      },
      {
        title: "Growth initiatives",
        items: [
          { label: "Mining & future expansion", href: "/mining#initiatives" },
          { label: "Vehicle assembly", href: "/mining#initiatives" },
          { label: "Partnership formats", href: "/mining#partnerships" },
        ],
      },
    ],
  },
  {
    label: "Coffee Export",
    href: "/coffee",
    columns: [
      {
        title: "Origins",
        items: [
          { label: "Sidama & Yirgacheffe", href: "/coffee#origins" },
          { label: "Guji & Gedeb", href: "/coffee#origins" },
          { label: "Limu & Jimma", href: "/coffee#origins" },
        ],
      },
      {
        title: "Processing",
        items: [
          { label: "Natural & honey", href: "/coffee#processing" },
          { label: "Washed & wet-hulled", href: "/coffee#processing" },
          { label: "QC & cupping lab", href: "/coffee#processing" },
        ],
      },
      {
        title: "Buyer services",
        items: [
          { label: "Documentation & compliance", href: "/coffee#buyer-services" },
          { label: "Logistics & shipping", href: "/coffee#buyer-services" },
          { label: "Request samples", href: "/coffee#buyer-services" },
        ],
      },
    ],
    highlight: {
      title: "Download coffee portfolio",
      description: "Regional profiles, processing details, and availability.",
      href: "/coffee#downloads",
    },
  },
  {
    label: "Partners & Resources",
    columns: [
      {
        title: "Strategic alliances",
        items: [
          { label: "Electronics & appliances", href: "/partners#alliances" },
          { label: "Furniture & interiors", href: "/partners#alliances" },
          { label: "Logistics & finance", href: "/partners#enablement" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "News & insights", href: "/resources#news" },
          { label: "Case studies", href: "/resources#news" },
          { label: "Downloads & media kit", href: "/resources#downloads" },
        ],
      },
      {
        title: "Engage with us",
        items: [
          { label: "Corporate inquiries", href: "/contact" },
          { label: "Supplier onboarding", href: "/resources#downloads" },
          { label: "Career opportunities", href: "/about#profile" },
        ],
      },
    ],
  },
];

export const primaryLinks = [
  { label: "Contact", href: "/contact" },
];

