import Button from "../ui/Button";

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const PortfolioFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: PortfolioFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          variant={activeCategory === category ? "default" : "outline"}
          className={`rounded-full px-6 ${
            activeCategory === category
              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              : "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default PortfolioFilter;