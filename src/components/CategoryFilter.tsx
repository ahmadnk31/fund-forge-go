import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const categories = [
  { name: "All", count: 2543 },
  { name: "Medical", count: 892 },
  { name: "Education", count: 456 },
  { name: "Emergency", count: 234 },
  { name: "Community", count: 567 },
  { name: "Animals", count: 123 },
  { name: "Sports", count: 89 },
  { name: "Creative", count: 182 }
];

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          <p className="text-muted-foreground">
            {categories.find(cat => cat.name === activeCategory)?.count.toLocaleString()} campaigns
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              className={`relative ${
                activeCategory === category.name 
                  ? "bg-gradient-primary hover:opacity-90" 
                  : "hover:bg-primary/10"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
              <Badge 
                variant="secondary" 
                className="ml-2 text-xs"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}