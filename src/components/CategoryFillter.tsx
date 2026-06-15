type Props = {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
};

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex gap-3 flex-wrap mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-xl border ${
            selected === cat
              ? "bg-indigo-600 text-white"
              : "border-indigo-400 text-black"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}