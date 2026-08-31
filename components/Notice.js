/**
 * Top announcement bar. Pass the message as children; wrap the lead-in
 * words in <strong> for the amber highlight (matches the originals).
 */
export default function Notice({ children }) {
  return (
    <div className="bg-deep px-[18px] py-2 text-center text-[.85rem] text-white/90 max-sm2:text-[.75rem] [&_strong]:text-amber">
      {children}
    </div>
  );
}
