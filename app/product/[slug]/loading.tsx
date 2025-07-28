export default function Loading() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section*/}
      <section className='py-12 bg-gradient-to-r from-blue-600 to-blue-800'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='h-12 bg-blue-500 rounded mb-6 animate-pulse'></div>
            <div className='h-6 bg-blue-500 rounded mb-4 animate-pulse'></div>
            <div className='h-6 bg-blue-500 rounded w-3/4 mx-auto animate-pulse'></div>
          </div>
        </div>
      </section>

      {/* Video Section*/}
      <section className='py-12'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='h-8 bg-gray-300 rounded mb-8 w-1/3 mx-auto animate-pulse'></div>
            <div className='aspect-video bg-gray-300 rounded-lg animate-pulse'></div>
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton*/}
      <section className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='h-8 bg-gray-300 rounded mb-8 w-1/4 animate-pulse'></div>
          <div className='grid md:grid-cols-2 gap-6'>
            {[1, 2].map((i) => (
              <div key={i} className='bg-white p-6 rounded-lg'>
                <div className='flex items-start space-x-4'>
                  <div className='w-20 h-20 bg-gray-300 rounded-full animate-pulse'></div>
                  <div className='flex-1'>
                    <div className='h-6 bg-gray-300 rounded mb-2 animate-pulse'></div>
                    <div className='h-4 bg-gray-300 rounded mb-2 w-2/3 animate-pulse'></div>
                    <div className='h-4 bg-gray-300 rounded w-1/2 animate-pulse'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
