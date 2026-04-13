import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="space-y-6 text-center py-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mt-2">Product Not Found</p>
      </div>

      <p className="text-gray-700 max-w-md mx-auto">
        Sorry, we couldn't find the product you're looking for. It may have been
        removed or the URL might be incorrect.
      </p>

      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          href="/product"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Browse Catalog
        </Link>
        <Link
          href="/"
          className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
