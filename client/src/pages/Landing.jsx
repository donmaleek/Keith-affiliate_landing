export default function Landing() {
  return (
    <div className="min-h-screen bg-[#06142E] text-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-6">
          Learn Affiliate Marketing The Smart Way
        </h1>

        <p className="text-gray-300 mb-8">
          Discover how to make consistent income recommending products you love.
        </p>

        <button
          onClick={() =>
            (window.location.href =
              "https://paystack.shop/pay/afflmarketing")
          }
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-10 py-4 rounded-2xl"
        >
          Secure Your Seat – KES 1,000
        </button>
      </div>
    </div>
  );
}
