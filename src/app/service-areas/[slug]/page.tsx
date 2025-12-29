import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceAreaClient from './ServiceAreaClient';
import { getServiceArea, getServiceAreaMetadata, serviceAreas } from './data';

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) {
    return {
      title: 'Service Area Not Found',
    };
  }
  return getServiceAreaMetadata(area);
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    notFound();
  }

  return <ServiceAreaClient area={area} />;
}
