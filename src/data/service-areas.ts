export type ServiceAreaLink = {
  name: string;
  slug: string;
  description: string;
};

export const serviceAreaLinks: ServiceAreaLink[] = [
  {
    name: 'Prescott',
    slug: 'prescott',
    description: 'Historic downtown and surrounding neighborhoods.',
  },
  {
    name: 'Prescott Valley',
    slug: 'prescott-valley',
    description: 'Growing communities and new developments.',
  },
  {
    name: 'Chino Valley',
    slug: 'chino-valley',
    description: 'Rural properties and ranch cleanups.',
  },
  {
    name: 'Paulden',
    slug: 'paulden',
    description: 'Remote areas and large properties.',
  },
  {
    name: 'Cordes Junction',
    slug: 'cordes-junction',
    description: 'I-17 corridor and commercial projects.',
  },
  {
    name: 'Williamson Valley',
    slug: 'williamson-valley',
    description: 'Upscale estates and custom homes.',
  },
  {
    name: 'Dewey',
    slug: 'dewey',
    description: 'Small town community service.',
  },
  {
    name: 'Humboldt',
    slug: 'humboldt',
    description: 'Local residential and business.',
  },
];
