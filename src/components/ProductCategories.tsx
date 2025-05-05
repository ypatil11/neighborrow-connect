
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { HeadphonesIcon, ToolsIcon, ShoppingBagIcon, HomeIcon, PartyPopperIcon, SportsIcon, MicrophoneIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const mainCategories = [
  { id: 1, name: "Sound & Video", icon: <HeadphonesIcon className="h-6 w-6" />, subcategories: [
    "Photography", "Photography Accessories", "Camcorders", "Other Audio & Video",
    "Music players", "Musical instruments", "Televisions", "Projectors & Accessories",
    "Music Accessories", "Audio equipment"
  ]},
  { id: 2, name: "Gaming", icon: <SportsIcon className="h-6 w-6" /> },
  { id: 3, name: "Pets", icon: <SportsIcon className="h-6 w-6" /> },
  { id: 4, name: "Tools", icon: <ToolsIcon className="h-6 w-6" /> },
  { id: 5, name: "Health & Baby", icon: <ShoppingBagIcon className="h-6 w-6" /> },
  { id: 6, name: "Clothing", icon: <ShoppingBagIcon className="h-6 w-6" /> },
  { id: 7, name: "Household", icon: <HomeIcon className="h-6 w-6" /> },
  { id: 8, name: "Event & Party", icon: <PartyPopperIcon className="h-6 w-6" /> },
  { id: 9, name: "Sports & Leisure", icon: <SportsIcon className="h-6 w-6" /> },
  { id: 10, name: "Transportation", icon: <ShoppingBagIcon className="h-6 w-6" /> },
  { id: 11, name: "Cooking", icon: <ShoppingBagIcon className="h-6 w-6" /> },
  { id: 12, name: "Computers", icon: <ShoppingBagIcon className="h-6 w-6" /> },
];

const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(1);

  return (
    <section className="py-12 bg-white" id="browse">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Products</h2>
        
        {/* Main categories - horizontal scroll */}
        <div className="relative mb-8">
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex space-x-4 px-1">
              {mainCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={cn(
                    "flex-shrink-0 h-24 w-32 flex-col gap-2",
                    activeCategory === category.id ? "bg-primary text-white" : "bg-white"
                  )}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  <span className="text-sm">{category.name}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Subcategories */}
        {activeCategory === 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mainCategories[0].subcategories.map((subcat, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="justify-start h-auto py-3 text-left"
              >
                <MicrophoneIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">{subcat}</span>
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCategories;
