import FilterBadge from "../../components/ui/FilterBadge";

export default function TrainingHero() {
  const categories = ["AI", "Cloud", "Mobile", "Virtual", "Web"];

  return (
    // 1. The RELATIVE Parent Container
    <section className="relative w-full max-w-6xl mx-auto py-24 px-8 bg-[#1e1e1e] text-white overflow-hidden rounded-3xl">
      {/* 2. The Top Text Block */}
      <div className="text-center relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
          Hands-on AI training.{" "}
          <span className="text-blue-500 bg-orange-500">Near you.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          Gain real-world experience with Google's latest AI tools & models and
          start building the future today.
        </p>
      </div>

      {/* 3. The ABSOLUTE Arrow SVG */}
      <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1100px] pointer-events-none z-0 hidden md:block">
        {" "}
        <svg
          width="1100"
          height="311"
          viewBox="0 0 1123 311"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.2001 309.59C39.2001 288.64 56.0701 259.88 76.9601 259.5"
            stroke="#4285F4"
            strokeWidth={"2.8"}
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M39.2 309.59C39.2 288.63 22.31 259.84 1.40001 259.5"
            stroke="#4285F4"
            strokeWidth={"2.8"}
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M1049.4 1.50009L1101.4 1.50009C1112.45 1.50009 1121.4 10.4544 1121.4 21.5001L1121.4 190.5C1121.4 201.546 1112.45 210.5 1101.4 210.5L59.4001 210.5C48.3544 210.5 39.4001 219.454 39.4001 230.5L39.4001 299.5"
            stroke="#4285F4"
            strokeWidth={"3"}
          />
        </svg>
      </div>

      {/* 4. The Bottom Action Block */}
      {/* mt-32 pushes this down to give the arrow room to breathe */}
      <div className="mt-32 md:mt-48 relative z-10 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Find an event near you
        </h2>

        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <FilterBadge key={category} isActive={index === 0}>
              {category}
            </FilterBadge>
          ))}
        </div>
      </div>
    </section>
  );
}
