import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Heart, Lightbulb, ChevronRight, Star, Award, Globe } from 'lucide-react';
import AuthModal from '../components/Auth/AuthModal';

const LandingPage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  const stats = [
    { number: '10,000+', label: 'Active Alumni', icon: Users },
    { number: '500+', label: 'Events Hosted', icon: Calendar },
    { number: '$2M+', label: 'Donations Raised', icon: Heart },
    { number: '1,200+', label: 'Mentorship Connections', icon: Lightbulb }
  ];

  const features = [
    {
      title: 'Alumni Directory',
      description: 'Connect with fellow graduates across industries and locations.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=250&fit=crop'
    },
    {
      title: 'Professional Events',
      description: 'Join networking events, workshops, and career development sessions.',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?w=400&h=250&fit=crop'
    },
    {
      title: 'Mentorship Programs',
      description: 'Get guidance from experienced professionals or mentor the next generation.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=400&h=250&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      year: '2018',
      quote: 'CampusRoot helped me find my mentor who guided me to land my dream job at Google.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at Microsoft',
      year: '2019',
      quote: 'The networking events here are incredible. I\'ve built lasting professional relationships.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Scientist at Netflix',
      year: '2017',
      quote: 'Being able to give back through mentoring current students has been incredibly rewarding.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Connect.
                    <span className="text-blue-600"> Engage.</span>
                    <br />
                    <span className="text-emerald-600">Grow.</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Join thousands of alumni in our centralized platform for networking, mentorship, 
                    career development, and giving back to our university community.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span className="text-lg font-semibold">Join as Alumni</span>
                    <ChevronRight size={20} />
                  </button>
                  <Link
                    to="/directory"
                    className="px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span className="text-lg font-semibold">Explore as Student</span>
                    <ChevronRight size={20} />
                  </Link>
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span className="text-lg font-semibold">Admin Login</span>
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-2">
                        <stat.icon size={24} className="text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?w=600&h=400&fit=crop"
                    alt="Alumni networking event"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Stay Connected
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform brings together all the tools you need to maintain and grow 
                your professional network within the alumni community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Success Stories from Our Alumni
              </h2>
              <p className="text-xl text-gray-600">
                Hear how CampusRoot has impacted careers and lives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600">Class of {testimonial.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Reconnect with Your Alumni Network?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join thousands of alumni who are already benefiting from our platform. 
                Start building meaningful connections today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button
                  onClick={() => handleAuthClick('signup')}
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  Get Started Now
                </button>
                <Link
                  to="/directory"
                  className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg"
                >
                  Browse Alumni Directory
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
};

export default LandingPage;