export default function FilterBadge({ children, isActive }) {
  return (
    <button
      className={`
        px-5 py-2 rounded-full text-sm font-medium transition-colors border
        ${
          isActive
            ? "bg-blue-900/20 border-blue-500 text-blue-400"
            : "border-slate-600 text-slate-300 hover:bg-slate-800"
        }
      `}
    >
      {children}
    </button>
  );
}
