import React from "react";
import Link from "next/link";

function slugifyId(title) {
  return title.replace(/\s+/g, "-").replace(/[&,/]/g, "").toLowerCase();
}

export default function ServiceCard({
  title,
  description,
  tags = [],
  icon,
  iconState,
  href,
  className = "",
}) {
  const cardId = `service-card-${slugifyId(title)}`;
  const lordIconProps = {
    src: icon,
    trigger: "hover",
    target: `#${cardId}`,
    stroke: "regular",
    colors: "secondary:#D71EB9",
    style: { width: 48, height: 48 },
  };
  if (iconState) lordIconProps.state = iconState;

  const arrowEl = (
    <span
      aria-hidden
      className="absolute top-6 right-6 w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-sm group-hover:bg-white transition"
    >
      ↗
    </span>
  );

  const content = (
    <>
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-neutral-200 overflow-hidden shrink-0">
            {icon ? (
              React.createElement("lord-icon", lordIconProps)
            ) : (
              <div className="w-4 h-4 bg-neutral-200" />
            )}
          </div>
          <div>
            <h3 className="font-serif italic w-[90%] text-xl leading-tight">{title}</h3>
            {description && <p className="text-neutral-600 text-sm w-[70%] mt-1">{description}</p>}
          </div>
        </div>
        {arrowEl}
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-white text-xs border border-neutral-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  const cardClasses = `relative rounded-md bg-neutral-100 p-4 transition duration-300 hover:shadow-md hover:-translate-y-1 group block ${className}`;

  if (href) {
    return (
      <Link id={cardId} href={href} className={cardClasses} aria-label={`Open ${title}`}>
        {content}
      </Link>
    );
  }

  return (
    <div id={cardId} className={cardClasses}>
      {content}
    </div>
  );
}

