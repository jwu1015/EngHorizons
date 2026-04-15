type SectionIntroProps = {
  /** Short label above the title (e.g. section index or category). */
  kicker: string;
  title?: string;
  lede?: string;
  /** Centered stack with top rule instead of left accent bar. */
  variant?: "frame" | "center";
};

export default function SectionIntro({
  kicker,
  title,
  lede,
  variant = "frame",
}: SectionIntroProps) {
  if (variant === "center") {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <div className="section-kicker-wrap flex justify-center border-t border-accent pt-6">
          <p className="section-kicker inline-block text-center">{kicker}</p>
        </div>
        {title ? (
          <h2 className="section-heading mt-3">{title}</h2>
        ) : null}
        {lede ? (
          <p
            className={`section-lede mx-auto text-center ${title ? "" : "mt-3"}`}
          >
            {lede}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="section-intro">
      <p className="section-kicker">{kicker}</p>
      {title ? <h2 className="section-heading">{title}</h2> : null}
      {lede ? (
        <p className={`section-lede ${title ? "" : "mt-3"}`}>{lede}</p>
      ) : null}
    </div>
  );
}
