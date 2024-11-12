import React from "react";
import { Button } from "@shadcn/ui";
import { MessageCircle, Video, MapPin, Users } from "lucide-react";

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans bg-gradient-to-r from-blue-500 to-purple-700 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect with Friends Anytime, Anywhere!</h1>
        <p className="text-lg md:text-xl mb-6">
          Your go-to app for messaging, video calling, location sharing, and more.
        </p>
        <div className="flex gap-4">
          <Button variant="primary" className="bg-white text-blue-700 hover:bg-gray-200">Get Started</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-blue-700 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <FeatureCard icon={<Users size={32} />} title="Following Users" description="Follow and connect with friends easily." />
          <FeatureCard icon={<MessageCircle size={32} />} title="Texting" description="Enjoy secure, real-time messaging with friends." />
          <FeatureCard icon={<Video size={32} />} title="Video Calling" description="Engage in high-quality video calls anytime." />
          <FeatureCard icon={<MapPin size={32} />} title="Location Sharing" description="Share your location safely with friends." />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          <TestimonialCard name="Alex Johnson" feedback="The video calls are smooth, and I love the location-sharing feature. Highly recommend!" />
          <TestimonialCard name="Samantha Lee" feedback="The texting and following features make it easy to stay connected with friends." />
          <TestimonialCard name="Michael Kim" feedback="This app has everything I need in one place. The interface is so user-friendly!" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white text-blue-700 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <StepCard step="1" title="Create an Account" description="Sign up in seconds and get started." />
          <StepCard step="2" title="Connect with Friends" description="Follow users and start chatting." />
          <StepCard step="3" title="Start Messaging or Calling" description="Enjoy texting, calling, and sharing locations!" />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
        <p className="text-lg mb-6">Join thousands of happy users today!</p>
        <Button variant="primary" className="bg-white text-blue-700 hover:bg-gray-200">Get Started</Button>
      </section>
    </div>
  );
};

export default LandingPage;
