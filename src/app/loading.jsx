export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="inline-flex items-center justify-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 bg-gradient-to-b from-amber-50 to-orange-50 rounded-full"></div>
          </div>
        </div>
        
        <h2 className="mt-8 text-2xl font-bold text-slate-800">Loading</h2>
        <p className="mt-3 text-slate-600 max-w-xs">
          We're preparing something amazing for you...
        </p>
      </div>
    </div>
  );
}
