import React, { useState } from 'react';
import { Star, MapPin, Building, MessageCircle, CheckCircle, Users, Award } from 'lucide-react';
import { mockMentors } from '../data/mockData';

const MentorshipPage: React.FC = () => {
  const [requestedMentors, setRequestedMentors] = useState<Set<string>>(new Set());
  const [selectedExpertise, setSelectedExpertise] = useState<string>('');

  const expertiseAreas = [...new Set(mockMentors.flatMap(mentor => mentor.expertise))];

  const handleMentorshipRequest = (mentorId: string) => {
    setRequestedMentors(prev => new Set([...prev, mentorId]));
  };

  const filteredMentors = selectedExpertise
    ? mockMentors.filter(mentor => mentor.expertise.includes(selectedExpertise))
    : mockMentors;

  const availableMentors = filteredMentors.filter(mentor => mentor.isAvailable);
  const unavailableMentors = filteredMentors.filter(mentor => !mentor.isAvailable);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mentorship Program</h1>
          <p className="text-xl text-gray-600 mb-6">
            Connect with experienced alumni who can guide your career journey
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{mockMentors.length}</p>
                  <p className="text-gray-600">Available Mentors</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageCircle size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {mockMentors.reduce((sum, mentor) => sum + mentor.menteeCount, 0)}
                  </p>
                  <p className="text-gray-600">Active Mentees</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {(mockMentors.reduce((sum, mentor) => sum + mentor.rating, 0) / mockMentors.length).toFixed(1)}
                  </p>
                  <p className="text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Expertise</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedExpertise('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedExpertise === ''
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Areas
              </button>
              {expertiseAreas.map((expertise) => (
                <button
                  key={expertise}
                  onClick={() => setSelectedExpertise(expertise)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedExpertise === expertise
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {expertise}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Available Mentors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableMentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={mentor.photo}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-green-50"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(mentor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">({mentor.rating})</span>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      Available
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Building size={16} />
                      <span className="text-sm">{mentor.company}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users size={16} />
                      <span className="text-sm">{mentor.menteeCount} active mentees</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {requestedMentors.has(mentor.id) ? (
                    <div className="flex items-center justify-center space-x-2 py-3 bg-green-50 text-green-700 rounded-lg font-medium">
                      <CheckCircle size={20} />
                      <span>Request Sent</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleMentorshipRequest(mentor.id)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Request Mentorship</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unavailable Mentors */}
        {unavailableMentors.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Currently Unavailable</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unavailableMentors.map((mentor) => (
                <div key={mentor.id} className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={mentor.photo}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-100"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < Math.floor(mentor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">({mentor.rating})</span>
                        </div>
                      </div>
                      <div className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        Unavailable
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Building size={16} />
                        <span className="text-sm">{mentor.company}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users size={16} />
                        <span className="text-sm">{mentor.menteeCount} active mentees</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gray-50 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      disabled
                      className="w-full bg-gray-100 text-gray-400 py-3 rounded-lg font-medium cursor-not-allowed"
                    >
                      Currently Unavailable
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How It Works */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">How Mentorship Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Browse & Choose</h4>
              <p className="text-blue-100">
                Explore our mentor profiles and find someone whose expertise aligns with your goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Request & Connect</h4>
              <p className="text-blue-100">
                Send a mentorship request with your goals and background. Mentors will review and respond.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Learn & Grow</h4>
              <p className="text-blue-100">
                Meet regularly, set goals, and receive guidance to advance your career and personal development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;