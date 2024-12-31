import { useState } from "react";
import PortfolioHero from "./PortfolioHero";
import PortfolioFilter from "./PortfolioFilter";
import ProjectsGrid from "./ProjectsGrid";
import PortfolioCTA from "./PortfolioCTA";
import { categories, projects } from "./PortfolioData";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "Todos" || project.category === activeCategory
  );

  return (
    <section className="py-10 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <PortfolioHero />
        <PortfolioFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProjectsGrid projects={filteredProjects} />
        <PortfolioCTA />
      </div>
    </section>
  );
};

export default Portfolio;