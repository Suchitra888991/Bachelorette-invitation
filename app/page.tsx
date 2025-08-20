import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      {/* Newspaper Header */}
      <header className="border-b-2 sm:border-b-4 border-black pb-2 sm:pb-4 mb-4 sm:mb-6">
        <div className="text-center">
          <h1
            className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider mb-1 sm:mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Bachelorette Post
          </h1>
          <div
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm font-body gap-1 sm:gap-0"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            <span>123 BROADWAY ST, NEW YORK CITY</span>
            <span>OCTOBER 15, 2024 | $2.50</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column - Main Article */}
        <div className="lg:col-span-2">
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            THE &ldquo;IT&rdquo; GIRL
            <br />
            IS GETTING MARRIED?
          </h2>

          {/* Main Image */}
          <div className="mb-4 sm:mb-6">
            <Image
              src="/elegant-woman-formal-event.png"
              alt="The &lsquo;It&rsquo; Girl at a formal event"
              width={800}
              height={600}
              className="w-full h-auto border border-gray-300"
            />
          </div>

          {/* Article Text */}
          <div
            className="font-body text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4"
            style={{ fontFamily: "var(--font-crimson)" }}
          >
            <p className="font-bold text-base sm:text-lg">THIS JUST IN:</p>

            <p>
              When Sophia, Our Fabulous Gal-pal Girl here, was asked about her
              upcoming nuptials, she had this to say: &ldquo;It&rsquo;s Special Series was
              the Wonderful with a ring on her finger. Whenever there comes a
              time when you know, you know. And I know that this is the man I
              want to spend the rest of my life with.&rdquo; The happy couple Prince
              Charming after all.
            </p>

            <p>
              You know what that means? It&rsquo;s time to Say I Do Miss Goodbye! The
              girls are going on a weekend trip to celebrate. So you can take
              notes. Pack your bags & get ready to party because this girl is
              getting married! So grab I wonder what type of fun these girls
              will get into, but I know it will be a night to remember and
              they&rsquo;ll have the time of their lives.
            </p>

            <p className="font-bold">
              YOU KNOW YOU LOVE ME, XOXO, GOSSIP GIRL ♡
            </p>
          </div>
        </div>

        {/* Right Column - Event Details */}
        <div className="lg:col-span-1">
          <div className="border-2 border-black p-3 sm:p-4 lg:p-6">
            <h3
              className="font-serif text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              EVENT DETAILS
            </h3>

            <div
              className="font-body text-xs sm:text-sm leading-tight grid grid-cols-1 gap-2 sm:gap-3"
              style={{ fontFamily: "var(--font-crimson)" }}
            >
              <div className="bg-gray-50 p-2 sm:p-3 border border-gray-200">
                <div className="font-bold text-center mb-1 sm:mb-2">
                  SATURDAY
                </div>
                <div className="text-xs sm:text-sm">
                  • Breakfast & spa
                  <br />• Pool party
                  <br />• Dinner & speeches
                  <br />• Dancing & festivities
                </div>
              </div>

              <div className="bg-gray-50 p-2 sm:p-3 border border-gray-200">
                <div className="font-bold text-center mb-1 sm:mb-2">SUNDAY</div>
                <div className="text-xs sm:text-sm">
                  • Brunch & beach
                  <br />• Speeches
                  <br />• Farewell & departure
                </div>
              </div>
            </div>
          </div>

          {/* Additional Image */}
          <div className="mt-4 sm:mt-6">
            <Image
              src="/placeholder-7kbev.png"
              alt="Group celebration photo"
              width={400}
              height={300}
              className="w-full h-auto border border-gray-300"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
