// components/HowItWorks.js
import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="pt-80 text-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-cyan-500 text-lightish-black rounded-full h-16 w-16 flex items-center justify-center  text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Submit Your Artwork</h3>
            <p className="text-gray-300 text-center">
              Share your creative code-based artwork with the community by
              submitting it through our easy-to-use submission form.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-cyan-500 text-lightish-black rounded-full h-16 w-16 flex items-center justify-center  text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Artwork Review</h3>
            <p className="text-gray-300 text-center">
              Our team of curators will review your submission to ensure it
              meets our guidelines and showcases your creativity.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-cyan-500 rounded-full h-16 w-16 flex items-center justify-center text-lightish-black text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Display and Engage</h3>
            <p className="text-gray-300 text-center">
              Once approved, your artwork will be displayed in our gallery for
              the community to admire, vote, and engage with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
