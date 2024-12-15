const Icon = ({ name, color, h, w, className }) => {
  return (
    <svg
      width={w}
      height={h}
      fill={color}
      aria-hidden="true"
      className={className}
    >
      <use xlinkHref={`/Sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
