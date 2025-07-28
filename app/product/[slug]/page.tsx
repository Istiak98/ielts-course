import type { Metadata } from 'next';
import ProductContent from '@/components/product/ProductContent';

interface ProductPageProps {
  params: { slug: string };
  searchParams: { lang?: string };
}

export async function generateMetadata({}: ProductPageProps): Promise<Metadata> {
  return {
    title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
    description:
      'Complete IELTS preparation course with expert instruction, mock tests, and comprehensive study materials.',
    openGraph: {
      title: 'IELTS Course by Munzereen Shahid',
      description:
        'Complete IELTS preparation course with expert instruction, mock tests, and comprehensive study materials.',
      images: [
        {
          url: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png',
          width: 1200,
          height: 675,
        },
      ],
    },
  };
}

export default function ProductPage({
  params,
  searchParams,
}: ProductPageProps) {
  return <ProductContent slug={params?.slug} lang={searchParams?.lang} />;
}
