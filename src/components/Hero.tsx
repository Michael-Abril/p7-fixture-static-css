export default function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="absolute bottom-20 left-1/2 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Flower icon */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-20 h-20 text-teal-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 21a9 9 0 110-18 9 9 0 010 18z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 12a3 3 0 100-6 3 3 0 000 6z"
            />
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Blooms & Petals
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Fresh flowers, hand-picked arrangements, and custom bouquets for every occasion. We bring nature's beauty to your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOrder}
            className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Order
          </button>
          <a
            href="#gallery"
            className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors"
          >
            View Our Flowers
          </a>
        </div>
      </div>
    </section>
  );
}
