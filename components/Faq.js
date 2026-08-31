/**
 * FAQ list. `items` = [ [question, answer], ... ].
 * Questions and answers are always visible — no click needed — so the
 * content is readable (and crawlable) straight away.
 */
export default function Faq({ items }) {
  return (
    <div className="mx-auto grid max-w-[900px] gap-[11px]">
      {items.map(([q, a]) => (
        <div
          key={q}
          className="overflow-hidden rounded-[13px] border border-line bg-white px-5 py-[19px]"
        >
          <h3 className="mb-2 flex gap-2.5 text-[1.02rem] font-[830] text-navy">
            <span aria-hidden className="flex-none font-black text-teal">
              Q.
            </span>
            <span>{q}</span>
          </h3>
          <p className="m-0 pl-[27px] text-slate max-sm2:pl-0">{a}</p>
        </div>
      ))}
    </div>
  );
}
