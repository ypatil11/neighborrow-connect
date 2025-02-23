
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ArrowLeft, Loader2, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";
// import { useToast } from "@/hooks/use-toast";

// declare global {
//   interface Window {
//     google: any;
//   }
// }

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [location, setLocation] = useState("");
//   const [isLoadingLocation, setIsLoadingLocation] = useState(false);
//   const { toast } = useToast();
//   const autocompleteInputRef = useRef<HTMLInputElement>(null);
//   const [autocomplete, setAutocomplete] = useState<any>(null);

//   useEffect(() => {
//     // Initialize Google Places Autocomplete
//     if (window.google && autocompleteInputRef.current && !autocomplete) {
//       const autocompleteInstance = new window.google.maps.places.Autocomplete(
//         autocompleteInputRef.current,
//         { types: ['(cities)'] }
//       );
      
//       autocompleteInstance.addListener('place_changed', () => {
//         const place = autocompleteInstance.getPlace();
//         if (place.formatted_address) {
//           setLocation(place.formatted_address);
//         }
//       });

//       setAutocomplete(autocompleteInstance);
//     }
//   }, [autocompleteInputRef.current, window.google]);

//   const detectLocation = () => {
//     setIsLoadingLocation(true);
    
//     if (!navigator.geolocation) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: "Geolocation is not supported by your browser",
//       });
//       setIsLoadingLocation(false);
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         try {
//           const response = await fetch(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
//           );
//           const data = await response.json();
          
//           if (data.results && data.results[0]) {
//             setLocation(data.results[0].formatted_address);
//           }
//         } catch (error) {
//           toast({
//             variant: "destructive",
//             title: "Error",
//             description: "Failed to detect location",
//           });
//         } finally {
//           setIsLoadingLocation(false);
//         }
//       },
//       (error) => {
//         toast({
//           variant: "destructive",
//           title: "Error",
//           description: "Failed to detect location",
//         });
//         setIsLoadingLocation(false);
//       }
//     );
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add form submission logic here
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-white flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1">
//           <div className="flex items-center justify-between">
//             <Link to="/" className="text-gray-600 hover:text-primary">
//               <ArrowLeft className="h-5 w-5" />
//             </Link>
//             <Link to="/" className="text-2xl font-semibold text-primary">
//               NeighBorrow
//             </Link>
//           </div>
//           <CardTitle className="text-2xl mt-4">Create an account</CardTitle>
//           <CardDescription>Enter your details to get started</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name</Label>
//               <Input 
//                 id="name" 
//                 type="text" 
//                 placeholder="John Doe" 
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input 
//                 id="email" 
//                 type="email" 
//                 placeholder="m@example.com" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input 
//                 id="password" 
//                 type="password" 
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="location">Location</Label>
//               <div className="relative">
//                 <Input 
//                   id="location" 
//                   type="text" 
//                   placeholder="Enter your location" 
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   ref={autocompleteInputRef}
//                   required
//                 />
//                 <Button
//                   type="button"
//                   variant="outline"
//                   size="icon"
//                   className="absolute right-2 top-1/2 -translate-y-1/2"
//                   onClick={detectLocation}
//                   disabled={isLoadingLocation}
//                 >
//                   {isLoadingLocation ? (
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                   ) : (
//                     <MapPin className="h-4 w-4" />
//                   )}
//                 </Button>
//               </div>
//             </div>
//             <Button type="submit" className="w-full">Sign Up</Button>
//           </form>
//           <div className="text-center text-sm">
//             <span className="text-gray-600">Already have an account? </span>
//             <Link to="/signin" className="text-primary hover:underline">
//               Sign in
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SignUp;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Loader2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    google: any;
  }
}

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const { toast } = useToast();
  const autocompleteInputRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] = useState<any>(null);

  useEffect(() => {
    if (window.google && autocompleteInputRef.current && !autocomplete) {
      const autocompleteInstance = new window.google.maps.places.Autocomplete(
        autocompleteInputRef.current,
        { types: ['(cities)'] }
      );
      
      autocompleteInstance.addListener('place_changed', () => {
        const place = autocompleteInstance.getPlace();
        if (place.formatted_address) {
          setLocation(place.formatted_address);
        }
      });

      setAutocomplete(autocompleteInstance);
    }
  }, [autocompleteInputRef.current, window.google]);

  const detectLocation = () => {
    setIsLoadingLocation(true);
    
    if (!navigator.geolocation) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Geolocation is not supported by your browser",
      });
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
          );
          const data = await response.json();
          
          if (data.results && data.results[0]) {
            setLocation(data.results[0].formatted_address);
          }
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to detect location",
          });
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to detect location",
        });
        setIsLoadingLocation(false);
      }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address",
      });
      return;
    }

    if (password.length < 8 || password.length > 64) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Password must be between 8 and 64 characters",
      });
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-gray-600 hover:text-primary">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link to="/" className="text-2xl font-semibold text-primary">
              NeighBorrow
            </Link>
          </div>
          <CardTitle className="text-2xl mt-4">Create an account</CardTitle>
          <CardDescription>Enter your details to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                maxLength={64}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <Input 
                  id="location" 
                  type="text" 
                  placeholder="Enter your location" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  ref={autocompleteInputRef}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={detectLocation}
                  disabled={isLoadingLocation}
                >
                  {isLoadingLocation ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <MapPin className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
          <div className="text-center text-sm text-gray-600">
            Fields with * are mandatory to fill.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;