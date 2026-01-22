import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  const pct = Math.min(100, Math.max(0, progress));

  return (
    <Html center>
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="relative">
          <div className="h-14 w-14 rounded-full border border-white/20 border-t-[#915eff] animate-spin" />
          <div className="absolute inset-0 rounded-full bg-[#915eff]/20 blur-md" />
        </div>

        <p className="text-sm font-semibold tracking-wide text-white/80">
          Loading {pct.toFixed(0)}%
        </p>

        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#915eff] to-[#ffffff]"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
