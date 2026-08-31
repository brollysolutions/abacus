/**
 * Junior/senior pathway card with the colored left rail, pill, bullet
 * list and the two meta chips. `tone="senior"` switches amber -> teal.
 */
export default function Programme({ tone = "junior", pill, title, lede, items, meta }) {
  const isSenior = tone === "senior";
  return (
    <article className="relative overflow-hidden rounded-xl2 border border-line bg-white p-[30px] max-sm2:p-[27px_22px]">
      <span
        className={`absolute inset-y-0 left-0 w-[7px] ${
          isSenior ? "bg-teal" : "bg-amber"
        }`}
      />
      <span
        className={`mb-[15px] inline-flex rounded-full px-2.5 py-1.5 text-[.74rem] font-extrabold ${
          isSenior ? "bg-teal-soft text-[#076567]" : "bg-amber-soft text-[#7a5200]"
        }`}
      >
        {pill}
      </span>
      <h3 className="text-[1.2rem]">{title}</h3>
      <p className="text-slate">{lede}</p>
      <ul className="mt-4 list-disc pl-[21px] text-slate [&>li+li]:mt-1.5">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <div className="mt-[21px] grid grid-cols-2 gap-2.5 max-sm2:grid-cols-1">
        {meta.map((m) => (
          <span
            key={m}
            className="rounded-[10px] bg-mist p-[11px] text-[.81rem] font-[760] text-navy"
          >
            {m}
          </span>
        ))}
      </div>
    </article>
  );
}
