type ArrowIconProps = {
  className?: string;
  durationClassName?: string;
};

export function ArrowIcon({
  className = "h-3.5 w-3.5",
  durationClassName = "duration-200",
}: ArrowIconProps) {
  const transition = `transition-opacity ${durationClassName}`;
  const hoverTransition = `transition-[opacity,transform] ${durationClassName}`;

  return (
    <span className="relative inline-grid place-items-center">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className={`${className} ${transition} group-hover:opacity-0`}
      >
        <path
          d="M6 14 14 6M8 6h6v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className={`absolute ${className} opacity-0 ${hoverTransition} group-hover:translate-x-0.5 group-hover:opacity-100`}
      >
        <path
          d="M4 10h11M11 6l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
