import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A]">
        <div className="text-2xl font-bold text-[#FF5722]">Tennis Breakdown</div>
        <div className="hidden sm:flex gap-6">
          <Link href="#how-it-works" className="hover:text-[#FF5722]">How It Works</Link>
          <Link href="#offers" className="hover:text-[#FF5722]">Offers</Link>
          <Link href="/login" className="hover:text-[#FF5722]">Login</Link>
          <Link href="/signup" className="hover:text-[#FF5722]">Sign Up</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Elite tennis analysis <span className="text-[#FF5722]">for players who want to win more matches</span>
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto mb-10">
            Send your match. Receive a professional breakdown in 48h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/signup" className="px-10 py-4 rounded-full bg-[#FF5722] text-white font-bold text-lg hover:brightness-110 transition shadow-lg shadow-[#FF5722]/20">
              👉 Get Your Match Analyzed
            </Link>
            <Link href="#offers" className="px-10 py-4 rounded-full border-2 border-[#FF5722] text-[#FF5722] font-semibold text-lg hover:bg-[#FF5722] hover:text-white transition">
              View Offers
            </Link>
          </div>
          {/* Image placeholder area – à remplacer par une photo réelle de Sami */}
          <div className="mt-8 relative rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#141414] aspect-video max-w-3xl mx-auto flex items-center justify-center">
            <div className="text-center text-[#A0A0A0]">
              <div className="text-6xl mb-4">🎾</div>
              <p className="text-lg">Professional match analysis in action</p>
              <p className="text-sm mt-2">[Photo: Sami analyzing match footage]</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Stop guessing why you lose matches.</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="p-6"><p className="text-[#A0A0A0] text-lg">You train hard but don't see progress</p></div>
            <div className="p-6"><p className="text-[#A0A0A0] text-lg">You repeat the same tactical mistakes</p></div>
            <div className="p-6"><p className="text-[#A0A0A0] text-lg">You don't know what to adjust</p></div>
          </div>
          <p className="text-2xl font-bold text-[#FF5722]">That's where Tennis Breakdown comes in.</p>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 rounded-2xl border-2 border-[#FF5722] overflow-hidden bg-[#141414] flex items-center justify-center shrink-0">
              <div className="text-center text-[#A0A0A0]">
                <div className="text-5xl mb-2">👤</div>
                <p className="text-sm">Sami – Competitive player</p>
                <p className="text-xs mt-1">Engineer + Analyst</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">By a player, for players</h2>
              <div className="space-y-4 text-[#A0A0A0] text-lg">
                <p><strong className="text-[#FF5722]">Competitive player ranked in France</strong></p>
                <p>Performance-driven mindset with advanced tactical understanding</p>
                <p>Engineer-level analytical approach to match breakdowns</p>
                <p className="text-[#FF5722] font-semibold mt-6">
                  "I combine elite playing experience with structured performance analysis."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#FF5722] mb-6">1</div>
              <h3 className="text-2xl font-bold mb-4">Upload your match</h3>
              <p className="text-[#A0A0A0]">Send your video via Google Drive or WeTransfer (max 15 min)</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#FF5722] mb-6">2</div>
              <h3 className="text-2xl font-bold mb-4">I analyze every key pattern</h3>
              <p className="text-[#A0A0A0]">Technical, tactical, mental – everything that impacts your results</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#FF5722] mb-6">3</div>
              <h3 className="text-2xl font-bold mb-4">Receive your performance roadmap</h3>
              <p className="text-[#A0A0A0]">Annotated video + actionable report within 24–48h</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="offers" className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-[#A0A0A0] mb-12">Videos up to 15 minutes. All prices in EUR.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Match Breakdown */}
            <div className="p-8 border border-[#2A2A2A] rounded-2xl bg-[#141414]">
              <h3 className="text-2xl font-bold mb-2 text-[#FF5722]">Match Breakdown</h3>
              <p className="text-4xl font-bold mb-6">39€ <span className="text-lg font-normal text-[#A0A0A0]">/ video</span></p>
              <ul className="text-[#A0A0A0] space-y-3 mb-8">
                <li>✓ Technical feedback</li>
                <li>✓ Tactical insights</li>
                <li>✓ Key adjustments</li>
                <li>✓ 24–48h delivery</li>
              </ul>
              <Link href="/signup" className="block w-full text-center px-6 py-3 rounded-full bg-[#FF5722] text-white font-bold hover:brightness-110 transition">
                Start Now
              </Link>
            </div>

            {/* Performance Breakdown – MOST POPULAR */}
            <div className="p-8 border-2 border-[#FF5722] rounded-2xl bg-[#1A1A1A] relative transform md:scale-105 shadow-xl shadow-[#FF5722]/20">
              <div className="absolute -top-4 right-4 bg-[#FF5722] text-white text-sm px-4 py-1 rounded-full font-bold">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-2 text-[#FF5722]">Performance Breakdown</h3>
              <p className="text-4xl font-bold mb-6">69€ <span className="text-lg font-normal text-[#A0A0A0]">/ video</span></p>
              <ul className="text-[#A0A0A0] space-y-3 mb-8">
                <li>✓ Full analysis</li>
                <li>✓ Personalized improvement plan</li>
                <li>✓ Tactical patterns breakdown</li>
                <li>✓ Training focus recommendations</li>
                <li>✓ 24–48h delivery</li>
              </ul>
              <Link href="/signup" className="block w-full text-center px-6 py-3 rounded-full bg-[#FF5722] text-white font-bold hover:brightness-110 transition">
                Start Now
              </Link>
            </div>

            {/* Elite Breakdown */}
            <div className="p-8 border border-[#2A2A2A] rounded-2xl bg-[#141414]">
              <h3 className="text-2xl font-bold mb-2 text-[#FF5722]">Elite Breakdown</h3>
              <p className="text-4xl font-bold mb-6">119€ <span className="text-lg font-normal text-[#A0A0A0]">/ video</span></p>
              <ul className="text-[#A0A0A0] space-y-3 mb-8">
                <li>✓ Deep performance audit</li>
                <li>✓ Match strategy review</li>
                <li>✓ Priority adjustments</li>
                <li>✓ Extended feedback (video + report)</li>
                <li>✓ 12–24h priority delivery</li>
              </ul>
              <Link href="/signup" className="block w-full text-center px-6 py-3 rounded-full bg-[#FF5722] text-white font-bold hover:brightness-110 transition">
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#FF5722]">📹</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Annotated Video</h3>
                <p className="text-[#A0A0A0]">Your match with timestamped comments overlayed directly on the footage</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#FF5722]">📊</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tactical Report</h3>
                <p className="text-[#A0A0A0]">Structured PDF highlighting patterns, mistakes, and opportunities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#FF5722]">🎯</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Action Plan</h3>
                <p className="text-[#A0A0A0]">Concrete drills and adjustments you can apply in your next training</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl text-[#FF5722]">🏆</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Winning Adjustments</h3>
                <p className="text-[#A0A0A0]">Specific, situational advice to turn close matches in your favor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="px-6 py-16 border-t border-[#2A2A2A] bg-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why Tennis Breakdown Is Different</h2>
          <div className="space-y-6 text-xl">
            <p className="text-[#A0A0A0]">❌ Not AI-generated analysis</p>
            <p className="text-[#A0A0A0]">❌ Not generic coaching advice</p>
            <p className="text-[#A0A0A0]">❌ Not automated feedback</p>
            <div className="mt-8 p-6 border-l-4 border-[#FF5722] bg-[#1A1A1A] rounded-r-lg">
              <p className="text-2xl font-bold text-[#FF5722]">
                Real competitive insight from an elite player.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Players Say</h2>
          <div className="space-y-8">
            <div className="p-6 border border-[#2A2A2A] rounded-xl bg-[#141414]">
              <p className="text-[#E5E5E5] italic mb-4">"I won my next match thanks to this analysis. Finally someone who explains what actually works at tournament level."</p>
              <p className="text-[#FF5722] font-bold">— Thomas, tournament player</p>
            </div>
            <div className="p-6 border border-[#2A2A2A] rounded-xl bg-[#141414]">
              <p className="text-[#E5E5E5] italic mb-4">"The annotation on my backhand was crystal clear. I fixed it in one week and my consistency jumped 40%."</p>
              <p className="text-[#FF5722] font-bold">— Marie, competitive amateur</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 border-t border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#FF5722]">How long does it take?</h3>
              <p className="text-[#A0A0A0]">You receive your breakdown within 24–48 hours after we receive your video.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#FF5722]">What level is required?</h3>
              <p className="text-[#A0A0A0]">Any competitive player – from beginner tournament level to elite.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#FF5722]">How do I send my match?</h3>
              <p className="text-[#A0A0A0]">Upload to Google Drive or WeTransfer and share the link with us.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#FF5722]">Is my video confidential?</h3>
              <p className="text-[#A0A0A0]">Yes. Your video is never shared or used for AI training without your explicit permission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 border-t border-[#2A2A2A] bg-gradient-to-b from-[#141414] to-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Your opponents are improving. Are you?</h2>
          <p className="text-xl text-[#A0A0A0] mb-10">Get your professional match analysis today.</p>
          <Link href="/signup" className="inline-block px-12 py-5 rounded-full bg-[#FF5722] text-white font-bold text-2xl hover:brightness-110 transition shadow-lg shadow-[#FF5722]/20">
            👉 Get Your Match Analyzed
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#2A2A2A] text-center text-[#A0A0A0]">
        <p className="mb-2">© 2026 Tennis Breakdown. All rights reserved.</p>
        <p className="text-sm">Professional tennis match analysis service</p>
      </footer>
    </div>
  );
}
