import FilterBadge from "../../components/ui/FilterBadge";

export default function TrainingHero() {
  const categories = ["AI", "Cloud", "Mobile", "Virtual", "Web"];

  return (
    // 1. The RELATIVE Parent Container
   

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
