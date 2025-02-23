
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import FeaturedItems from "@/components/FeaturedItems";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <Hero />
//       <FeaturedItems />
//     </div>
//   );
// };

// export default Index;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div
        className="background-wrapper"
        style={{
          backgroundImage: `url('/src/assets/images/background.jpeg')`,
        }}
      >
        {/* Optional Overlay */}
        <div className="overlay"></div>

        {/* Content */}
        <div className="content">
          <Hero />
          <FeaturedItems />
        </div>
      </div>
    </div>
  );
};

export default Index;