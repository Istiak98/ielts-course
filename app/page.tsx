import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          10 Minute School Product Pages
        </h1>
        <p className='text-gray-600 mb-8'>
          Visit a product page to see the implementation in action.
        </p>
        <Button asChild>
          <Link href='/product/ielts-course?lang=en'>
            View IELTS Course (English)
          </Link>
        </Button>
        <div className='mt-4'>
          <Button variant='outline' asChild>
            <Link href='/product/ielts-course?lang=bn'>
              View IELTS Course (Bengali)
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
