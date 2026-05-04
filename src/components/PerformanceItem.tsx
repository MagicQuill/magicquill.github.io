import React, { useState, useEffect } from "react";
import { Performance } from "../constants";
import AudioPlayer from "./AudioPlayer";
import ScoreDisplay from "./ScoreDisplay";

interface PerformanceItemProps {
  performance: Performance;
  index: number;
}

const PerformanceItem: React.FC<PerformanceItemProps> = ({
  performance,
  index,
}) => {
  const [viewMode, setViewMode] = useState<"video" | "score">("video");
  const [activeVideoMethod, setActiveVideoMethod] =
    useState<keyof Performance["videoComparison"]>("oursHybrid");
  const [activeScoreMethod, setActiveScoreMethod] =
    useState<keyof Performance["scoreComparison"]>("oursHybrid");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const videoMethods = [
    { id: "oursHybrid", label: "Ours Hybrid" },
    // { id: 'oursOnline', label: 'Ours Online' },
    { id: "logicPro", label: "Logic Pro" },
  ];

  const scoreMethods = [
    { id: "oursHybrid", label: "Ours Hybrid" },
    { id: "oursOnline", label: "Ours Online" },
    { id: "liuEtAl", label: "Liu et al." },
    { id: "beyerEtAl", label: "Beyer et al." },
  ];

  // Stop audio when switching modes or methods
  useEffect(() => {
    setIsAudioPlaying(false);
  }, [viewMode, activeScoreMethod]);

  return (
    <div
      id={`performance-${performance.id}`}
      className="bg-white border border-gray-200 rounded-lg shadow-sm mb-16 overflow-hidden"
    >
      {/* Title Header */}
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
        <h3 className="text-base font-bold text-gray-800">
          Example {index + 1}: {performance.title}
        </h3>
        <p className="text-xs text-gray-500 mt-5 mb-3">
          {performance.description}
        </p>
      </div>

      <div className="p-6">
        {/* Main View Toggle */}
        <div className="flex border-b border-gray-200 mb-6 font-medium text-sm">
          <button
            onClick={() => setViewMode("video")}
            className={`pb-3 px-1 mr-8 transition-all ${
              viewMode === "video"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Live Transcription Demo
          </button>
          <button
            onClick={() => setViewMode("score")}
            className={`pb-3 px-1 transition-all ${
              viewMode === "score"
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Transcribed Score Comparison
          </button>
        </div>

        {/* Method Toggles */}
        <div className="flex flex-wrap gap-2 mb-6">
          {viewMode === "video"
            ? videoMethods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveVideoMethod(m.id as any)}
                  className={`px-4 py-2 text-xs rounded border transition-all ${
                    activeVideoMethod === m.id
                      ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {m.label}
                </button>
              ))
            : scoreMethods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveScoreMethod(m.id as any)}
                  className={`px-4 py-2 text-xs rounded border transition-all ${
                    activeScoreMethod === m.id
                      ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {m.label}
                </button>
              ))}
        </div>

        {/* Content View */}
        <div className="min-h-[400px]">
          {viewMode === "video" ? (
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-black rounded shadow-lg overflow-hidden border border-gray-100">
                <video
                  key={performance.videoComparison[activeVideoMethod]}
                  src={performance.videoComparison[activeVideoMethod]}
                  controls
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 text-xs text-gray-400 text-center italic">
                Live Transcription Visualization —{" "}
                {videoMethods.find((m) => m.id === activeVideoMethod)?.label}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <ScoreDisplay
                xmlUrl={
                  performance.scoreComparison[activeScoreMethod].musicXmlUrl
                }
                isPlaying={isAudioPlaying}
                onTogglePlay={() => setIsAudioPlaying(!isAudioPlaying)}
              />
              <div className="flex flex-col gap-2">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1 opacity-50">
                  Score MIDI
                </div>
                <AudioPlayer
                  url={performance.scoreComparison[activeScoreMethod].audioUrl}
                  name={`${performance.scoreComparison[activeScoreMethod].name}.mid`}
                  isPlaying={isAudioPlaying}
                  onTogglePlay={setIsAudioPlaying}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceItem;
