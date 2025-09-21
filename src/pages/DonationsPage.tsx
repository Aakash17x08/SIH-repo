import React, { useState } from 'react';
import { Heart, DollarSign, Target, Users, CreditCard, Shield } from 'lucide-react';
import { mockDonations } from '../data/mockData';

const DonationsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: '',
    customAmount: '',
    purpose: 'scholarship',
    donorName: '',
    email: '',
    isAnonymous: false
  });

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];
  
  const purposes = [
    { value: 'scholarship', label: 'Scholarship Fund', icon: '🎓' },
    { value: 'infrastructure', label: 'Infrastructure Development', icon: '🏗️' },
    { value: 'research', label: 'Research Programs', icon: '🔬' },
    { value: 'student-activities', label: 'Student Activities', icon: '🎯' },
    { value: 'general', label: 'General Fund', icon: '💼' }
  ];

  const totalDonated = mockDonations.reduce((sum, donation) => sum + donation.amount, 0);
  const donorCount = mockDonations.filter(d => !d.isAnonymous).length;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setFormData({ ...formData, amount: amount.toString(), customAmount: '' });
  };

  const handleCustomAmount = (value: string) => {
    setFormData({ ...formData, customAmount: value, amount: value });
    setSelectedAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock donation processing
    alert('Thank you for your generous donation! In a real application, this would process the payment.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contributions help us provide scholarships, improve facilities, 
            and create opportunities for current and future students.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign size={32} className="text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">${totalDonated.toLocaleString()}</h3>
            <p className="text-gray-600">Total Raised This Year</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{donorCount}</h3>
            <p className="text-gray-600">Active Donors</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target size={32} className="text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">85%</h3>
            <p className="text-gray-600">Goal Achieved</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Donation Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-3 border rounded-lg text-center transition-colors ${
                        selectedAmount === amount
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <DollarSign size={20} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={formData.customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Purpose Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose Purpose
                </label>
                <div className="space-y-2">
                  {purposes.map((purpose) => (
                    <label key={purpose.value} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="purpose"
                        value={purpose.value}
                        checked={formData.purpose === purpose.value}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-lg">{purpose.icon}</span>
                      <span className="text-gray-700">{purpose.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Donor Information</h3>
                
                <div>
                  <label className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      checked={formData.isAnonymous}
                      onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Make this donation anonymous</span>
                  </label>
                </div>

                {!formData.isAnonymous && (
                  <>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.donorName}
                      onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </>
                )}
              </div>

              {/* Security Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-blue-800">
                  <Shield size={20} />
                  <span className="font-medium">Secure Payment</span>
                </div>
                <p className="text-sm text-blue-700 mt-1">
                  Your payment information is encrypted and secure. We never store your credit card details.
                </p>
              </div>

              {/* Donate Button */}
              <button
                type="submit"
                disabled={!formData.amount}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <CreditCard size={24} />
                <span>
                  Donate {formData.amount ? `$${formData.amount}` : 'Now'}
                </span>
              </button>
            </form>
          </div>

          {/* Recent Donations */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Donations</h2>
              <div className="space-y-4">
                {mockDonations.slice(0, 5).map((donation) => (
                  <div key={donation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Heart size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {donation.isAnonymous ? 'Anonymous Donor' : donation.donorName}
                        </p>
                        <p className="text-sm text-gray-600">{donation.purpose}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">${donation.amount.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(donation.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Statement */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Your Impact Matters</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🎓</span>
                  </div>
                  <p>$50 provides textbooks for one student for a semester</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-lg">💻</span>
                  </div>
                  <p>$250 funds computer lab equipment upgrades</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🏆</span>
                  </div>
                  <p>$1,000 sponsors a full scholarship for a semester</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;