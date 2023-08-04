import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="container space-y-5 max-w-6xl mx-auto p-8 text-center flex justify-center flex-col items-center mt-40">
      <h2 className="text-7xl text-gray-100 font-bold font-montserrat">
        Unleash Your Creativity at{" "}
        <span className="bg-gradient-to-r bg-clip-text from-cyan-500 to-violet-500 text-transparent">
          Devs & Pixels
        </span>
      </h2>
      <p className="text-xl text-gray-300">
        Discover captivating code-based art and collaborative projects, where
        developers&apos; skills merge with the beauty of pixels. Welcome to a
        world where algorithms paint masterpieces, and innovation knows no
        bounds.
      </p>

      <div className="space-x-5">
        <button className="bg-cyan-500 border-2 text-lightish-black border-cyan-500 px-5 py-3 font-bold rounded hover:bg-cyan-400 transition-colors duration-200 text-xl">
          Start Coding
        </button>
        <button className="border-violet-500 text-violet-400 bg-transparent border-2 px-5 py-3 font-bold rounded hover:bg-violet-400 hover:border-violet-400 hover:text-lightish-black transition-colors duration-200 text-xl">
          Explore More
        </button>
      </div>

      <HowItWorks />
    </main>
  );
}
