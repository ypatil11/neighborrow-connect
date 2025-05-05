
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

const sharedProducts = [
  {
    id: 1,
    title: "Folding Table",
    description: "Fairly lightweight and easy to transport",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    owner: {
      name: "Michael",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    id: 2,
    title: "Jack Stand",
    description: "Free to borrow",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    owner: {
      name: "Sarah",
      avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    id: 3,
    title: "Tent",
    description: "Great tent for 2-3 people",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    owner: {
      name: "David",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    id: 4,
    title: "Hand Truck",
    description: "Free to borrow",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    owner: {
      name: "Jessica",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    id: 5,
    title: "Drill",
    description: "Heavy duty power drill",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    owner: {
      name: "Thomas",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  }
];

const FrequentlyShared = () => {
  return (
    <section className="py-16 bg-white" id="share">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Shared Products</h2>
        
        <ScrollArea className="w-full pb-4">
          <div className="flex space-x-6">
            {sharedProducts.map((product) => (
              <Card 
                key={product.id} 
                className="flex-shrink-0 w-64 hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                      <img 
                        src={product.owner.avatar}
                        alt={product.owner.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-700">{product.owner.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default FrequentlyShared;
