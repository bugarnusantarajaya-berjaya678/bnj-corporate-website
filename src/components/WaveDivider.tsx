export default function WaveDivider({
  fill,
  className = "",
}: {
  fill: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-14 w-full sm:h-20 lg:h-28"
      >
        <path
          d="M0,64 C240,112 480,16 720,48 C960,80 1200,16 1440,56 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
