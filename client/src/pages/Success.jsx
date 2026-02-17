export default function Success() {
  return (
    <div className="min-h-screen bg-[#06142E] text-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl font-bold text-green-400 mb-6">
          🎉 You're In!
        </h1>

        <p className="mb-6 text-gray-300">
          Your seat has been confirmed. Check your email for the Zoom link.
        </p>

        <a
          href="https://zoom.us/your-link"
          className="bg-green-500 text-black px-8 py-4 rounded-2xl font-semibold"
        >
          Join Live Masterclass
        </a>
      </div>
    </div>
  );
}
