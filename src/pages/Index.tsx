
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Amplify Your Brand's Voice
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with the right influencers to share your story and grow your reach
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section Placeholder */}
      <section id="services" className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          {/* Add services content here */}
        </div>
      </section>

      {/* About Section Placeholder */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          {/* Add about content here */}
        </div>
      </section>

      {/* Testimonials Section Placeholder */}
      <section id="testimonials" className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          {/* Add testimonials content here */}
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          {/* Add contact form here */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
