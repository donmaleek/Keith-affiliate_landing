export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#06142E] text-white">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-3xl font-bold mb-4">You're in!</h1>
        <p className="text-gray-300 mb-6">
          Complete your booking below to secure your session time.
        </p>
        <a
          href="https://calendly.com/keithmuoki/affiliate-marketing-masterclass-keith-muoki-stripe?month=2026-02"
          className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-2xl"
        >
          Book Your Slot on Calendly
        </a>
      </div>
    </div>
  );
}
