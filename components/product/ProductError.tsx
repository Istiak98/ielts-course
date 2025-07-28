"use client"

import { Button } from "@/components/ui/button"

interface ProductErrorProps {
  error: any
  refetch: () => void
}

export default function ProductError({ error, refetch }: ProductErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          {error?.data?.message || error?.message || "Failed to load the product. Please try again."}
        </p>
        <div className="space-x-4">
          <Button onClick={refetch} className="bg-blue-600 hover:bg-blue-700">
            Try Again
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}
