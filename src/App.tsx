import { PERFORMANCES } from "./constants";
import PerformanceItem from "./components/PerformanceItem";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Centered Academic Header */}
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
        <div className="mb-12">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            Interactive Transcription Demo Gallery
          </h2>
          <div className="h-px bg-gray-100 w-full" />
        </div>

        <div className="space-y-4">
          {PERFORMANCES.map((p, index) => (
            <PerformanceItem key={p.id} performance={p} index={index} />
          ))}
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-gray-100 py-16 px-6 mt-20 text-center">
        <div className="max-w-4xl mx-auto text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          <span>Magic Quill Transcription Demo</span>
        </div>
      </footer>
    </div>
  );
}
