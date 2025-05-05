
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CalendarRange, Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

// Categories for filtering
const itemCategories = [
  "All Categories", "Sound & Video", "Gaming", "Pets", "Tools", 
  "Health & Baby", "Clothing", "Household", 
  "Event & Party", "Sports & Leisure", 
  "Transportation", "Cooking", "Computers"
];

// Interface for the listing item
interface Listing {
  id: string;
  name: string;
  description: string;
  category: string;
  startDate: string;
  endDate?: string;
  price?: string;
  condition: string;
  location?: string;
  createdAt: string;
}

const Borrow = () => {
  const { toast } = useToast();
  
  const [listings, setListings] = useState<Listing[]>([]);
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
  
  const [filters, setFilters] = useState({
    search: "",
    category: "All Categories"
  });
  
  // Load listings from localStorage on component mount
  useEffect(() => {
    const storedListings = localStorage.getItem('listings');
    if (storedListings) {
      const parsedListings = JSON.parse(storedListings);
      setListings(parsedListings);
      setFilteredListings(parsedListings);
    }
  }, []);
  
  // Handle search and filter changes
  useEffect(() => {
    let result = [...listings];
    
    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchLower) || 
        item.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply category filter
    if (filters.category !== "All Categories") {
      result = result.filter(item => item.category === filters.category);
    }
    
    setFilteredListings(result);
  }, [filters, listings]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };
  
  const handleCategoryChange = (value: string) => {
    setFilters(prev => ({ ...prev, category: value }));
  };
  
  const handleBorrowRequest = (itemId: string) => {
    // In a real app, this would send a request to the owner
    // For now, we'll just show a toast message
    toast({
      title: "Borrow request sent!",
      description: "The owner will be notified about your interest.",
    });
  };
  
  // Format price for display
  const formatPrice = (price?: string) => {
    if (!price) return "Free";
    return `$${parseFloat(price).toFixed(2)}/day`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/10 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/lend-borrow" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Browse Items to Borrow</h1>
        </div>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="search" className="mb-2 block">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  id="search"
                  placeholder="Search items..."
                  value={filters.search}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="category" className="mb-2 block">Category</Label>
              <Select
                value={filters.category}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {itemCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Items ({filteredListings.length})</h2>
          
          {filteredListings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No items match your search criteria.</p>
              <p className="text-gray-500">Try adjusting your filters or <Link to="/lend" className="text-primary hover:underline">list an item</Link> yourself!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <div className="text-sm text-gray-500">{item.category}</div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-700 mb-4 line-clamp-3">{item.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Condition:</span>
                        <span className="font-medium">{item.condition}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-500">Price:</span>
                        <span className="font-medium">{formatPrice(item.price)}</span>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CalendarRange className="h-4 w-4 text-gray-500 mt-0.5" />
                        <span className="text-gray-700">
                          Available from {new Date(item.startDate).toLocaleDateString()}
                          {item.endDate && ` to ${new Date(item.endDate).toLocaleDateString()}`}
                        </span>
                      </div>
                      
                      {item.location && (
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                          <span className="text-gray-700">{item.location}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className="w-full"
                      onClick={() => handleBorrowRequest(item.id)}
                    >
                      Request to Borrow
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Borrow;
