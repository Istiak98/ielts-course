export default function ProductSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <header className="bg-gray-100 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="h-4 bg-gray-300 rounded w-48 animate-pulse"></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title Skeleton */}
            <div className="h-10 bg-gray-300 rounded w-3/4 animate-pulse"></div>

            {/* Description Skeleton */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse"></div>
              </div>
            </div>

            {/* Instructor Skeleton */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-6 bg-gray-300 rounded w-1/4 mb-6 animate-pulse"></div>
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg border">
                <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-300 rounded w-1/2 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Features Skeleton */}
            <div className="bg-white border rounded-lg p-6">
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-6 animate-pulse"></div>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-gray-300 rounded animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
                      <div className="h-3 bg-gray-300 rounded w-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Skeleton */}
          <div className="lg:col-span-1 space-y-6">
            {/* Video Skeleton */}
            <div className="bg-white border rounded-lg p-6">
              <div className="h-5 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
              <div className="aspect-video bg-gray-300 rounded animate-pulse"></div>
            </div>

            {/* CTA Skeleton */}
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="h-8 bg-blue-500 rounded w-1/2 mx-auto mb-4 animate-pulse"></div>
              <div className="h-12 bg-blue-500 rounded animate-pulse"></div>
            </div>

            {/* Checklist Skeleton */}
            <div className="bg-white border rounded-lg p-6">
              <div className="h-5 bg-gray-300 rounded w-1/2 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded flex-1 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
