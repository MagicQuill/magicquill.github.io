import { PERFORMANCES } from "./constants";
import PerformanceItem from "./components/PerformanceItem";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="py-20 px-6 border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
            Magic Quill: Instantaneous MIDI-to-Score Transcription via Online
            Inference and Offline Refinement
          </h1>

          <div className="flex flex-col items-center gap-4 text-sm text-gray-500 mb-8">
            <div className="font-medium text-gray-900">Anonymous Authors</div>
          </div>

          <div className="inline-flex items-center px-3 py-1 bg-yellow-50 text-yellow-700 text-[10px] font-bold uppercase tracking-widest rounded border border-yellow-100">
            Supplementary Demo Material
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-16">
          <h2 className="text-xl font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            Transcription Demo Gallery
          </h2>
          <div className="h-px bg-gray-100 w-full mb-8" />

          {/* Intro & System Comparison */}
          <div className="max-w-4xl mb-12">
            <p className="text-base text-gray-900 leading-relaxed mb-8">
              This page contains a collection of nine interactive examples
              demonstrating the real-time capability and transcription quality
              of our proposed method. We compare our two configurations against
              one commercial online tool and two state-of-the-art offline
              baselines:
            </p>

            {/* Side-by-Side Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm">
              {/* Proposed Systems */}
              <div className="bg-blue-50/30 p-5 rounded-lg border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-3 uppercase tracking-wider text-[11px]">
                  Our Proposed Systems
                </h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside marker:text-blue-300">
                  <li>
                    <strong className="text-gray-900">Online:</strong> Uses only
                    our online beat tracker.
                  </li>
                  <li>
                    <strong className="text-gray-900">Hybrid:</strong>{" "}
                    Interleaves online inference with offline refinement.
                  </li>
                </ul>
              </div>

              {/* Baseline Systems */}
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-500 mb-3 uppercase tracking-wider text-[11px]">
                  Baseline Systems
                </h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside marker:text-gray-300">
                  <li>
                    <strong className="text-gray-900">
                      Logic Pro (Online):
                    </strong>{" "}
                    Requires a predefined tempo. We manually selected an optimal
                    tempo per piece, though the tempo naturally fluctuates.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Liu et al. [1] (Offline):
                    </strong>{" "}
                    A leading LSTM-based PM2S system.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      Beyer et al. [2] (Offline):
                    </strong>{" "}
                    The current SOTA offline PM2S system.
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed italic">
              To ensure a rigorous evaluation, <strong>none</strong> of the
              following compositions were included in the training, validation,
              or test sets. Most of these samples target{" "}
              <strong>out-of-distribution</strong> styles to showcase model
              robustness under complex performance conditions.
            </p>
          </div>
        </div>

        {/* Gallery Items */}
        <div className="space-y-6">
          {PERFORMANCES.map((p, index) => (
            <PerformanceItem key={p.id} performance={p} index={index} />
          ))}
        </div>

        {/* References Section */}
        <section className="mt-20 border-t border-gray-100 pt-10">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            References
          </h2>
          <ol className="list-decimal list-inside text-xs text-gray-500 space-y-2">
            <li>
              <span className="italic">
                L. Liu, Q. Kong, V. Morfi, and E. Benetos, “Performance
                MIDI-to-score conversion by neural beat tracking,” in
                Proceedings of the 23rd International Society for Music
                Information Retrieval Conference (ISMIR), Bengaluru, India,
                December 2022.
              </span>
            </li>
            <li>
              <span className="italic">
                T. Beyer and A. Dai, “End-to-end piano performance-MIDI to score
                conversion with transformers,” in International Society for
                Music Information Retrieval Conference, 2024.
              </span>
            </li>
          </ol>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-gray-100 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          <span>Magic Quill Transcription Demo</span>
        </div>
      </footer>
    </div>
  );
}
