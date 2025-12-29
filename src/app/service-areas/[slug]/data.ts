import type { Metadata } from 'next';

export type MarketCard = {
  icon: 'home' | 'building' | 'hardhat';
  title: string;
  description: string;
  bullets: string[];
};

export type Trend = {
  title: string;
  description: string;
};

export type ServiceAreaData = {
  slug: string;
  name: string;
  heroTagline: string;
  heroLead: string;
  metaTitle: string;
  metaDescription: string;
  photoLabel: string;
  photoCaption: string;
  quickFacts: { label: string; value: string }[];
  marketCards: MarketCard[];
  trends: Trend[];
  projects: string[];
  servicesNote: string;
  ctaTitle: string;
  ctaCopy: string;
};

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: 'prescott',
    name: 'Prescott',
    heroTagline: 'Historic downtown, hillside lots, and year-round remodels.',
    heroLead:
      'Prescott projects often involve tight access, older homes, and busy neighborhoods. We plan delivery windows carefully, protect driveways, and keep pickup timing clean and predictable.',
    metaTitle: 'Prescott, AZ Dumpster Rental | Yavapai Waste Solutions',
    metaDescription:
      'Dumpsters for Prescott, AZ remodels, estate cleanouts, and contractors. Fast delivery, clear pricing, and local support.',
    photoLabel: 'Downtown Prescott',
    photoCaption: 'Photo placeholder for Prescott projects and historic districts.',
    quickFacts: [
      { label: 'Access', value: 'Downtown-friendly delivery windows' },
      { label: 'Homes', value: 'Remodel and estate cleanout support' },
      { label: 'Business', value: 'Retail and property management pickups' },
    ],
    marketCards: [
      {
        icon: 'home',
        title: 'Residential Needs',
        description:
          'Historic homes and hillside driveways benefit from careful placement and clean staging.',
        bullets: [
          'Basement and attic cleanouts',
          'Roofing and remodel debris',
          'Estate and rental turnovers',
        ],
      },
      {
        icon: 'building',
        title: 'Business Needs',
        description:
          'Downtown storefronts and property managers need reliable pickups and clear schedules.',
        bullets: [
          'Retail and restaurant refreshes',
          'Scheduled commercial service',
          'Property manager cleanouts',
        ],
      },
      {
        icon: 'hardhat',
        title: 'Construction Trends',
        description:
          'Infill builds and remodels keep demand steady across the city core.',
        bullets: [
          'Tight-site roll-off placement',
          'Fast swaps for crews',
          'Clean site handoffs',
        ],
      },
    ],
    trends: [
      {
        title: 'Historic Remodels',
        description:
          'Older homes see steady renovation work and benefit from scheduled pickups.',
      },
      {
        title: 'Seasonal Cleanups',
        description:
          'Pre-monsoon and winter cleanups drive short-term rental demand.',
      },
      {
        title: 'Downtown Upgrades',
        description:
          'Retail refreshes and tenant improvements require tidy staging.',
      },
    ],
    projects: [
      'Bathroom and kitchen remodels',
      'Roofing tear-offs',
      'Retail refresh projects',
      'Estate cleanouts',
    ],
    servicesNote:
      'Need the right size for a Prescott project? We will walk you through it quickly.',
    ctaTitle: 'Ready for a Prescott delivery?',
    ctaCopy: 'Get a fast quote and reserve your delivery window today.',
  },
  {
    slug: 'prescott-valley',
    name: 'Prescott Valley',
    heroTagline: 'Fast growth, new neighborhoods, and busy retail corridors.',
    heroLead:
      'Prescott Valley projects range from move-in cleanouts to new construction. We support growing communities with flexible scheduling and clear rental terms.',
    metaTitle: 'Prescott Valley Dumpster Rental | Yavapai Waste Solutions',
    metaDescription:
      'Dumpsters for Prescott Valley homes, HOAs, and commercial sites. Fast delivery and flexible scheduling.',
    photoLabel: 'Prescott Valley Growth',
    photoCaption: 'Photo placeholder for new neighborhoods and community projects.',
    quickFacts: [
      { label: 'Growth', value: 'New builds and community upgrades' },
      { label: 'Residential', value: 'Move-in and garage cleanouts' },
      { label: 'Business', value: 'Retail and office service' },
    ],
    marketCards: [
      {
        icon: 'home',
        title: 'Residential Needs',
        description:
          'Move-ins, remodels, and yard upgrades are common across newer neighborhoods.',
        bullets: [
          'Garage and attic cleanouts',
          'DIY remodel debris',
          'Yard and landscape cleanup',
        ],
      },
      {
        icon: 'building',
        title: 'Business Needs',
        description:
          'Retail and office sites need dependable pickups that fit business hours.',
        bullets: [
          'Retail tenant improvements',
          'HOA and community cleanups',
          'Office and warehouse support',
        ],
      },
      {
        icon: 'hardhat',
        title: 'Construction Trends',
        description:
          'New construction drives ongoing demand for roll-off service.',
        bullets: [
          'New home build debris',
          'Staged delivery and pickup',
          'Reliable swap-outs',
        ],
      },
    ],
    trends: [
      {
        title: 'Residential Growth',
        description:
          'New subdivisions keep demand steady for cleanouts and remodels.',
      },
      {
        title: 'HOA Projects',
        description:
          'Community cleanup days create short bursts of rental demand.',
      },
      {
        title: 'Retail Expansion',
        description:
          'Tenant improvements require flexible delivery windows.',
      },
    ],
    projects: [
      'Move-in cleanouts',
      'Garage cleanups',
      'Retail renovations',
      'New build debris',
    ],
    servicesNote:
      'We keep Prescott Valley schedules flexible to match busy neighborhoods.',
    ctaTitle: 'Need a Prescott Valley dumpster fast?',
    ctaCopy: 'We can usually deliver within the day or next day.',
  },
  {
    slug: 'chino-valley',
    name: 'Chino Valley',
    heroTagline: 'Rural properties, ranches, and large-lot projects.',
    heroLead:
      'Chino Valley cleanups often include acreage, barns, and outbuildings. We plan placement for long driveways and larger debris loads.',
    metaTitle: 'Chino Valley Dumpster Rental | Yavapai Waste Solutions',
    metaDescription:
      'Dumpsters for Chino Valley ranches, rural cleanups, and construction projects. Local support and reliable delivery.',
    photoLabel: 'Chino Valley Ranches',
    photoCaption: 'Photo placeholder for rural properties and ranch projects.',
    quickFacts: [
      { label: 'Property', value: 'Ranch and acreage cleanouts' },
      { label: 'Access', value: 'Long driveway placement' },
      { label: 'Debris', value: 'Large volume hauling' },
    ],
    marketCards: [
      {
        icon: 'home',
        title: 'Residential Needs',
        description:
          'Large lots and outbuildings drive bigger cleanouts and more debris.',
        bullets: [
          'Barn and shed cleanups',
          'Fence and landscape debris',
          'Ranch property maintenance',
        ],
      },
      {
        icon: 'building',
        title: 'Business Needs',
        description:
          'Agricultural operations and contractors need dependable hauling.',
        bullets: [
          'Agricultural waste support',
          'Contractor staging areas',
          'Ongoing property service',
        ],
      },
      {
        icon: 'hardhat',
        title: 'Construction Trends',
        description:
          'Land clearing and new builds remain common in the area.',
        bullets: [
          'Land clearing debris',
          'Custom home builds',
          'Driveway and pad prep',
        ],
      },
    ],
    trends: [
      {
        title: 'Land Clearing',
        description:
          'Seasonal clearing projects bring larger debris volumes.',
      },
      {
        title: 'Ranch Maintenance',
        description: 'Outbuilding cleanups and fencing upgrades stay steady.',
      },
      {
        title: 'Storm Cleanup',
        description:
          'Rural properties need fast support after weather events.',
      },
    ],
    projects: [
      'Barn cleanouts',
      'Ranch debris hauling',
      'Land clearing',
      'Custom home builds',
    ],
    servicesNote:
      'We coordinate placement so trucks can access larger rural lots safely.',
    ctaTitle: 'Need a Chino Valley delivery?',
    ctaCopy: 'Call for scheduling that fits your ranch or job site.',
  },
  {
    slug: 'paulden',
    name: 'Paulden',
    heroTagline: 'Wide parcels, long driveways, and rural delivery needs.',
    heroLead:
      'Paulden customers rely on consistent delivery timing and safe placement across large properties. We keep the process simple and predictable.',
    metaTitle: 'Paulden Dumpster Rental | Yavapai Waste Solutions',
    metaDescription:
      'Dumpster rentals for Paulden cleanups, rural properties, and construction projects. Flexible rental terms and local service.',
    photoLabel: 'Paulden Properties',
    photoCaption: 'Photo placeholder for rural property cleanups in Paulden.',
    quickFacts: [
      { label: 'Access', value: 'Long driveway placement' },
      { label: 'Scheduling', value: 'Flexible rental lengths' },
      { label: 'Support', value: 'Local service team' },
    ],
    marketCards: [
      {
        icon: 'home',
        title: 'Residential Needs',
        description:
          'Rural homeowners handle seasonal cleanups and property maintenance.',
        bullets: [
          'Property maintenance cleanouts',
          'Renovation and repair debris',
          'Seasonal yard cleanup',
        ],
      },
      {
        icon: 'building',
        title: 'Business Needs',
        description:
          'Local trades and small businesses need reliable hauling support.',
        bullets: [
          'Contractor disposal needs',
          'Small business cleanups',
          'Rural delivery coordination',
        ],
      },
      {
        icon: 'hardhat',
        title: 'Construction Trends',
        description:
          'Site prep and custom builds are common across Paulden properties.',
        bullets: [
          'Site prep debris',
          'Custom home builds',
          'Driveway and pad projects',
        ],
      },
    ],
    trends: [
      {
        title: 'Seasonal Cleanups',
        description: 'Spring and fall cleanouts drive demand in rural areas.',
      },
      {
        title: 'Site Preparation',
        description: 'New builds bring steady roll-off needs.',
      },
      {
        title: 'Large-Lot Projects',
        description:
          'Bigger properties need larger dumpsters and longer rental windows.',
      },
    ],
    projects: [
      'Property cleanouts',
      'Renovation debris',
      'Custom home builds',
      'Seasonal yard waste',
    ],
    servicesNote:
      'We plan routes and placement for Paulden properties with ease.',
    ctaTitle: 'Schedule a Paulden drop-off',
    ctaCopy: 'Reserve a delivery time that works for your property access.',
  },
  {
    slug: 'cordes-junction',
    name: 'Cordes Junction',
    heroTagline: 'I-17 corridor service with flexible delivery windows.',
    heroLead:
      'Cordes Junction blends residential and highway corridor businesses. We focus on fast turnarounds and safe staging near commercial sites.',
    metaTitle: 'Cordes Junction Dumpster Rental | Yavapai Waste Solutions',
    metaDescription:
      'Dumpsters for Cordes Junction businesses, corridor construction, and residential cleanouts. Fast delivery and reliable pickup.',
    photoLabel: 'Cordes Junction Corridor',
    photoCaption: 'Photo placeholder for commercial corridor projects.',
    quickFacts: [
      { label: 'Timing', value: 'Flexible delivery windows' },
      { label: 'Business', value: 'Highway corridor support' },
      { label: 'Turnaround', value: 'Fast pickup coordination' },
    ],
    marketCards: [
      {
        icon: 'home',
        title: 'Residential Needs',
        description:
          'Residents rely on weekend cleanouts and reliable pickup timing.',
        bullets: [
          'Weekend project cleanups',
          'Garage and yard debris',
          'Simple scheduling',
        ],
      },
      {
        icon: 'building',
        title: 'Business Needs',
        description:
          'Travel centers, restaurants, and retail sites need quick swaps.',
        bullets: [
          'Commercial corridor service',
          'Tenant improvement debris',
          'Predictable pickup times',
        ],
      },
      {
        icon: 'hardhat',
        title: 'Construction Trends',
        description:
          'Corridor construction requires staging that avoids traffic impacts.',
        bullets: [
          'Roadside project staging',
          'Construction debris hauling',
          'Safety-first placement',
        ],
      },
    ],
    trends: [
      {
        title: 'Corridor Growth',
        description: 'Commercial activity drives steady construction work.',
      },
      {
        title: 'Fast Turnarounds',
        description: 'Businesses need quick swaps to keep sites clean.',
      },
      {
        title: 'Safe Staging',
        description: 'Placement planning helps avoid traffic disruptions.',
      },
    ],
    projects: [
      'Commercial corridor cleanups',
      'Tenant improvements',
      'Roadside construction',
      'Residential cleanouts',
    ],
    servicesNote:
      'We coordinate timing to keep corridor projects moving smoothly.',
    ctaTitle: 'Need corridor-ready service?',
    ctaCopy: 'We can align deliveries with your traffic and staffing needs.',
  },
  {
    slug: 'williamson-valley',
    name: 'Williamson Valley',
    heroTagline: 'Estate properties, custom homes, and acreage projects.',
    heroLead:
      'Williamson Valley projects often involve custom builds and landscape work. We size dumpsters for heavy debris and maintain clean staging.',
    metaTitle: 'Williamson Valley Dumpster Rental | Yavapai Waste Solutions',
    metaDescription:
      'Dumpsters for Williamson Valley estates, custom homes, and landscape projects. Local service with clear pricing.',
    photoLabel: 'Williamson Valley Estates',
    photoCaption: 'Photo placeholder for estate and custom home projects.',
    quickFacts: [
      { label: 'Projects', value: 'Custom home and estate cleanouts' },
      { label: 'Debris', value: 'Landscape and build materials' },
      { label: 'Service', value: 'On-site coordination' },
    ],
    marketCards: [
      {
        icon: 'home',
        title: 'Residential Needs',
        description:
          'Estate cleanouts and large-property maintenance need larger containers.',
        bullets: [
          'Estate and ranch cleanouts',
          'Landscape debris hauling',
          'Remodel and build waste',
        ],
      },
      {
        icon: 'building',
        title: 'Business Needs',
        description:
          'Builders and landscapers need steady roll-off access on site.',
        bullets: [
          'Custom home builders',
          'Landscape contractor support',
          'Flexible swap scheduling',
        ],
      },
      {
        icon: 'hardhat',
        title: 'Construction Trends',
        description:
          'Custom builds and site prep keep demand high for roll-offs.',
        bullets: [
          'Custom build debris',
          'Site prep waste',
          'Longer rental windows',
        ],
      },
    ],
    trends: [
      {
        title: 'Custom Homes',
        description: 'Larger builds create steady construction debris needs.',
      },
      {
        title: 'Landscape Upgrades',
        description: 'Hardscape projects require bulky hauling capacity.',
      },
      {
        title: 'Estate Maintenance',
        description: 'Seasonal cleanups keep properties tidy year-round.',
      },
    ],
    projects: [
      'Estate cleanouts',
      'Landscape upgrades',
      'Custom home builds',
      'Site prep and grading',
    ],
    servicesNote:
      'We help size the right dumpster for high-volume estate projects.',
    ctaTitle: 'Planning a Williamson Valley project?',
    ctaCopy: 'Let us recommend the right container and timeline.',
  },
  {
    slug: 'dewey',
    name: 'Dewey',
    heroTagline: 'Small-town service with quick, personal scheduling.',
    heroLead:
      'Dewey customers value clear communication and fast response. We help homeowners and local businesses keep cleanups simple.',
    metaTitle: 'Dewey Dumpster Rental | Yavapai Waste Solutions',
    metaDescription:
      'Dumpsters for Dewey cleanouts, remodels, and small business needs. Local service with fast delivery.',
    photoLabel: 'Dewey Neighborhoods',
    photoCaption: 'Photo placeholder for Dewey home and business cleanups.',
    quickFacts: [
      { label: 'Service', value: 'Personal scheduling and support' },
      { label: 'Residential', value: 'Garage and remodel cleanouts' },
      { label: 'Business', value: 'Local shop cleanups' },
    ],
    marketCards: [
      {
        icon: 'home',
        title: 'Residential Needs',
        description:
          'Homeowners rely on quick cleanouts and friendly scheduling.',
        bullets: [
          'Garage and shed cleanouts',
          'Remodel debris',
          'Seasonal yard cleanup',
        ],
      },
      {
        icon: 'building',
        title: 'Business Needs',
        description:
          'Local businesses need tidy spaces and reliable pickups.',
        bullets: [
          'Shop cleanouts',
          'Tenant move-out debris',
          'Flexible pickup timing',
        ],
      },
      {
        icon: 'hardhat',
        title: 'Construction Trends',
        description:
          'Renovations and small builds stay steady throughout the year.',
        bullets: [
          'Small build debris',
          'Remodel waste hauling',
          'Quick turnaround',
        ],
      },
    ],
    trends: [
      {
        title: 'Home Improvements',
        description: 'Residents keep projects moving with short-term rentals.',
      },
      {
        title: 'Spring Cleanups',
        description: 'Seasonal cleanouts drive a steady flow of rentals.',
      },
      {
        title: 'Rental Turnovers',
        description: 'Move-outs require prompt hauling and pickup.',
      },
    ],
    projects: [
      'Garage cleanouts',
      'Home remodels',
      'Rental turnovers',
      'Seasonal cleanup',
    ],
    servicesNote:
      'We make Dewey scheduling simple with local, responsive support.',
    ctaTitle: 'Ready for a Dewey cleanup?',
    ctaCopy: 'Book a dumpster and keep your project on track.',
  },
  {
    slug: 'humboldt',
    name: 'Humboldt',
    heroTagline: 'Local homes, small businesses, and flexible pickup needs.',
    heroLead:
      'Humboldt projects include home remodels and light commercial work. We keep scheduling flexible and pickups reliable.',
    metaTitle: 'Humboldt Dumpster Rental | Yavapai Waste Solutions',
    metaDescription:
      'Dumpsters for Humboldt home projects and small business cleanups. Flexible rental terms and local support.',
    photoLabel: 'Humboldt Service Area',
    photoCaption: 'Photo placeholder for Humboldt residential and business work.',
    quickFacts: [
      { label: 'Flexibility', value: 'Pickup windows that fit your schedule' },
      { label: 'Residential', value: 'Remodel and cleanup support' },
      { label: 'Business', value: 'Local commercial service' },
    ],
    marketCards: [
      {
        icon: 'home',
        title: 'Residential Needs',
        description:
          'Home projects and cleanouts stay steady across the community.',
        bullets: [
          'Home remodel debris',
          'Yard and landscape cleanup',
          'Garage cleanouts',
        ],
      },
      {
        icon: 'building',
        title: 'Business Needs',
        description:
          'Small businesses need predictable pickups and clean staging.',
        bullets: [
          'Shop and office cleanouts',
          'Property manager support',
          'Light commercial service',
        ],
      },
      {
        icon: 'hardhat',
        title: 'Construction Trends',
        description:
          'Renovations and light builds keep demand consistent.',
        bullets: [
          'Renovation debris',
          'Small job site support',
          'Quick swaps',
        ],
      },
    ],
    trends: [
      {
        title: 'Property Upgrades',
        description: 'Owners keep properties updated with steady remodels.',
      },
      {
        title: 'Small Business Refresh',
        description: 'Local businesses update spaces and signage.',
      },
      {
        title: 'Seasonal Cleanouts',
        description: 'Garage and yard cleanup demand spikes in spring.',
      },
    ],
    projects: [
      'Home remodels',
      'Business cleanouts',
      'Property upgrades',
      'Seasonal cleanups',
    ],
    servicesNote:
      'We keep Humboldt projects moving with simple scheduling and support.',
    ctaTitle: 'Need a Humboldt delivery?',
    ctaCopy: 'Get a quote and reserve a pickup that fits your timeline.',
  },
];

export function getServiceArea(slug: string): ServiceAreaData | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getServiceAreaMetadata(area: ServiceAreaData): Metadata {
  const keywords = [
    `${area.name} dumpster rental`,
    `${area.name} roll-off dumpster`,
    `dumpster rental ${area.name} AZ`,
    'Yavapai Waste Solutions',
    'Quad Cities dumpster rental',
  ];

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords,
  };
}
