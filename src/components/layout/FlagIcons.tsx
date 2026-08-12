/** Small inline flag icons for the locale toggle. No external assets: emoji
 * flags render as bare country-code letters on Windows, so SVG is the only
 * option that looks the same everywhere. */

export function FlagUS({ className }: { className?: string }) {
  const stripeHeight = 14 / 7;
  return (
    <svg
      viewBox="0 0 20 14"
      role="img"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="14" fill="#B22234" />
      {[1, 3, 5].map((stripe) => (
        <rect
          key={stripe}
          y={stripe * stripeHeight}
          width="20"
          height={stripeHeight}
          fill="#FFFFFF"
        />
      ))}
      <rect width="8" height="8" fill="#3C3B6E" />
      {[1.5, 3.5, 5.5].flatMap((y) =>
        [1.5, 4, 6.5].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.5" fill="#FFFFFF" />
        )),
      )}
    </svg>
  );
}

export function FlagBR({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 14"
      role="img"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="14" fill="#009C3B" />
      <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FFDF00" />
      <circle cx="10" cy="7" r="3.4" fill="#002776" />
      <path
        d="M6.7 5.9a6 6 0 0 1 6.9 2.6"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="0.6"
      />
    </svg>
  );
}
