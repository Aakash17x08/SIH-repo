import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink, CheckCircle } from 'lucide-react';
import { mockEvents } from '../data/mockData';

const EventsPage: React.FC = () => {
  const [registeredEvents, setRegisteredEvents] = useState<Set<string>>(
    new Set(mockEvents.filter(event => event.isRegistered).map(event => event.id))
  );

  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const handleRSVP = (eventId: string) => {
    setRegisteredEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  const upcomingEvents = mockEvents.filter(event => new Date(event.date) > new Date());
  const pastEvents = mockEvents.filter(event => new Date(event.date) <= new Date());

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Alumni Events</h1>
          <p className="text-xl text-gray-600">
            Stay connected through networking events, workshops, and community gatherings
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm inline-flex">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  {event.type === 'online' && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Online
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={16} />
                    <span className="text-sm">
                      {event.registeredCount} / {event.maxCapacity} registered
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  {event.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Registration Progress</span>
                    <span>{Math.round((event.registeredCount / event.maxCapacity) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(event.registeredCount / event.maxCapacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  {activeTab === 'upcoming' ? (
                    <button
                      onClick={() => handleRSVP(event.id)}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                        registeredEvents.has(event.id)
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {registeredEvents.has(event.id) ? (
                        <>
                          <CheckCircle size={16} />
                          <span>Registered</span>
                        </>
                      ) : (
                        <span>Register Now</span>
                      )}
                    </button>
                  ) : (
                    <span className="text-gray-500 text-sm">Event Completed</span>
                  )}

                  {event.type === 'online' && (
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">Join Link</span>
                      <ExternalLink size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Events */}
        {currentEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No {activeTab} events
            </h3>
            <p className="text-gray-600">
              {activeTab === 'upcoming' 
                ? 'Check back soon for new events!'
                : 'No past events to show.'
              }
            </p>
          </div>
        )}

        {/* Call to Action */}
        {activeTab === 'upcoming' && currentEvents.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Miss Out on Networking Opportunities!
            </h3>
            <p className="text-blue-100 mb-6">
              Join our events to connect with fellow alumni, build professional relationships, 
              and advance your career through meaningful conversations.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              View All Upcoming Events
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;