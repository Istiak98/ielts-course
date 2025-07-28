'use client';

import { useGetProductQuery } from '@/lib/api/productApi';
import ProductSkeleton from './ProductSkeleton';
import ProductError from './ProductError';
import { MediaItem } from '@/components/youtube-player';
import InstructorCard from '@/components/instructor-card';
import { Button } from '@/components/ui/button';
import type { Data } from '@/types/product';
import MediaCarousel from '@/components/youtube-player';

interface ProductContentProps {
  slug: string;
  lang?: string;
}

export default function ProductContent({
  slug,
  lang = 'en',
}: ProductContentProps) {
  const {
    data: response,
    error,
    isLoading,
    refetch,
  } = useGetProductQuery({ slug, lang });

  if (isLoading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <ProductError error={error} refetch={refetch} />;
  }

  if (!response?.data) {
    return (
      <ProductError
        error={{ message: 'Product not found' }}
        refetch={refetch}
      />
    );
  }

  const data: Data = response.data;

  // Separate sections by type
  const instructorSections = data?.sections?.filter(
    (section) => section.type === 'instructors'
  );
  const featureSections = data?.sections?.filter(
    (section) => section.type === 'features'
  );
  const pointerSections = data?.sections?.filter(
    (section) => section.type === 'pointers'
  );
  const aboutSections = data?.sections?.filter(
    (section) => section.type === 'about'
  );
  const featureExpSections = data?.sections?.filter(
    (section) => section.type === 'feature_explanations'
  );

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='bg-gray-100 py-4 border-b'>
        <div className='container mx-auto px-4'>
          <nav className='text-sm text-gray-600'>
            <a href='/' className='hover:text-blue-600'>
              Home
            </a>{' '}
            /<span className='ml-1 text-gray-900'>IELTS Course</span>
          </nav>
        </div>
      </header>

      <div className='container mx-auto px-4 py-8'>
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Left Column - Main Content (Scrollable) */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Title */}
            <section>
              <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                {data.title}
              </h1>
            </section>
            {/* Description */}
            <section className='bg-blue-50 p-6 rounded-lg'>
              <h2 className='text-2xl font-bold mb-4'>Course Description</h2>
              <div
                className='text-gray-700 leading-relaxed'
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </section>
            {/* Instructors */}
            {instructorSections.map((section, index) => (
              <section key={section.order_idx || index} className='rounded-lg'>
                <h2 className='text-2xl font-bold mb-6'>{section.name}</h2>
                <div className='grid gap-6'>
                  {section.values?.map((instructor, idx) => (
                    <InstructorCard
                      key={instructor.id || idx}
                      name={instructor.name || ''}
                      designation={instructor.short_description || 'Instructor'}
                      image={instructor.image || ''}
                      bio={instructor.description}
                    />
                  ))}
                </div>
              </section>
            ))}
            {/* How the course is laid out */}
            {featureSections.map((section, index) => (
              <div key={'id'}>
                <h2 className='text-2xl font-bold mb-6'>{section.name}</h2>
                <section
                  key={section.order_idx || index}
                  className='bg-#111827 border rounded-lg p-6'
                  style={{
                    backgroundColor: '#111827',
                  }}
                >
                  <div className='grid md:grid-cols-2 gap-4'>
                    {section.values?.map((feature, idx) => (
                      <div
                        key={feature.id || idx}
                        className='flex items-start space-x-3 p-4  rounded-lg'
                      >
                        {feature.icon && (
                          <img
                            src={feature.icon || '/placeholder.svg'}
                            alt=''
                            className='w-10 h-10 mt-1 flex-shrink-0'
                          />
                        )}
                        <div>
                          <h3 className='font-semibold text-white mb-1'>
                            {feature.title}
                          </h3>
                          {feature.subtitle && (
                            <p className='text-white text-sm'>
                              {feature.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            ))}
            {/* What you will learn by doing the course */}
            {pointerSections.map((section, index) => (
              <section
                key={section.order_idx || index}
                className='bg-white border border-gray-200 rounded-lg shadow-sm'
              >
                <h2 className='text-xl font-semibold mb-6 p-6 pb-0 text-gray-900'>
                  {section.name || 'What you will learn by doing the course'}
                </h2>
                <div className='p-6 pt-0'>
                  <div className='grid grid-cols-2 gap-6'>
                    {/* Left Column */}
                    <div className='space-y-4'>
                      {section.values?.slice(0, 3).map((pointer, idx) => (
                        <div
                          key={pointer.id || idx}
                          className='flex items-start space-x-3 p-4  rounded-lg'
                        >
                          <div className='text-blue-500 mt-0.5 flex-shrink-0'>
                            <svg
                              width='16'
                              height='16'
                              viewBox='0 0 16 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M13.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.793l6.646-6.647a.5.5 0 0 1 .708 0z'
                                fill='currentColor'
                              />
                            </svg>
                          </div>
                          <p className='text-gray-700 text-lg leading-relaxed'>
                            {pointer.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Right Column */}
                    <div className='space-y-4'>
                      {section.values?.slice(3, 6).map((pointer, idx) => (
                        <div
                          key={pointer.id || idx + 3}
                          className='flex items-start space-x-3 p-4  rounded-lg'
                        >
                          <div className='text-blue-500 mt-0.5 flex-shrink-0'>
                            <svg
                              width='16'
                              height='16'
                              viewBox='0 0 16 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M13.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.793l6.646-6.647a.5.5 0 0 1 .708 0z'
                                fill='currentColor'
                              />
                            </svg>
                          </div>
                          <p className='text-gray-700 text-lg leading-relaxed'>
                            {pointer.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Course Exclusive Feature - Using map for API Data */}
            <div>
              <h2 className='text-2xl font-bold mb-8 text-gray-900'>
                {featureExpSections[0]?.name}
              </h2>

              <div className='space-y-8 border rounded-lg'>
                {featureExpSections[0]?.values?.map((feature, index) => (
                  <section
                    key={feature.id}
                    className={`p-6 ${
                      index !== featureExpSections[0].values.length - 1
                        ? 'border-b border-gray-200'
                        : ''
                    }`}
                  >
                    <div className='flex flex-col md:flex-row gap-6'>
                      {/* Left Side - Content */}
                      <div className='w-full md:w-1/2'>
                        <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                          {feature.title}
                        </h3>
                        <ul className='space-y-3'>
                          {feature?.checklist?.map((item, i) => (
                            <li key={i} className='flex items-start'>
                              <div className='text-blue-500 mr-3 mt-0.5 flex-shrink-0'>
                                <svg
                                  width='16'
                                  height='16'
                                  viewBox='0 0 16 16'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M13.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.793l6.646-6.647a.5.5 0 0 1 .708 0z'
                                    fill='currentColor'
                                  />
                                </svg>
                              </div>
                              <span className='text-gray-700 text-lg leading-relaxed'>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Side - Image */}
                      <div className='w-full md:w-1/2 flex items-center justify-end'>
                        <div className='w-full max-w-xs'>
                          <img
                            src={feature.file_url}
                            alt={feature.title}
                            className='w-full h-auto object-cover rounded-lg'
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>

            {/* Course details */}
            <div>
              <div id='about'>
                <div>
                  <div className='mt-10 md:mt-0'>
                    {aboutSections.map((section, index) => (
                      <div key={section.order_idx || index} className='mb-8'>
                        <h2 className='text-xl font-semibold md:mb-4 md:text-2xl'>
                          {section.name}
                        </h2>
                        <div className='rounded-lg border border-gray-200 bg-white md:px-5 py-2'>
                          {section.values?.map((item, idx) => (
                            <details
                              key={item.id || idx}
                              className='group border-b border-dashed last:border-none'
                            >
                              <summary className='py-4 px-2 cursor-pointer flex items-center justify-between'>
                                <div className='max-w-[90%] text-lg md:text-base text-gray-800'>
                                  <h3
                                    dangerouslySetInnerHTML={{
                                      __html: `<b>${item.title}</b>`,
                                    }}
                                  />
                                </div>
                                <span className='ml-2 transition-transform group-open:rotate-180'>
                                  ▼
                                </span>
                              </summary>
                              <div className='px-2 pb-4 text-gray-600'>
                                <div className='prose prose-ul:pl-4'>
                                  {item.description && (
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.description,
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-8 space-y-6'>
              {/* Preview Carousel */}
              {data?.media?.length > 0 && (
                <div className='bg-white border rounded-lg'>
                  <MediaCarousel media={data.media as MediaItem[]} />
                </div>
              )}

              {/* Pricing + CTA */}
              <div className='bg-white border rounded-lg p-6 text-center'>
                {/* Price with discount */}
                <div className='mb-4'>
                  <div className='text-2xl font-bold text-gray-800'>
                    ৳{1000}
                    <span className='line-through text-gray-400 text-base ml-2'>
                      ৳{50}
                    </span>
                    <span className='ml-2 bg-red-100 text-red-600 text-sm px-2 py-1 rounded'>
                      {50} ৳ ছাড়
                    </span>
                  </div>
                </div>

                {/* Enroll Button */}
                <Button
                  size='lg'
                  className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg'
                >
                  {data?.cta_text?.name || 'Enroll'}
                </Button>

                <p className='text-gray-500 text-sm mt-3'>
                  Lifetime access • Certificate included
                </p>
              </div>

              {/* Course Features Checklist */}
              {data?.checklist?.length > 0 && (
                <div className='bg-white border rounded-lg p-6'>
                  <h3 className='text-xl font-bold mb-4'>এই কোর্সে যা থাকবে</h3>
                  <div className='space-y-3'>
                    {data.checklist.map((item) => (
                      <div key={item.id} className='flex items-start space-x-3'>
                        <img
                          src={item.icon || '/placeholder.svg'}
                          alt='icon'
                          className='w-6 h-6 mt-0.5 flex-shrink-0'
                        />
                        <p className='text-gray-800 text-base'>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
