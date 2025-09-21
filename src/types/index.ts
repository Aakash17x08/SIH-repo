export interface Alumni {
  id: string;
  name: string;
  photo: string;
  graduationYear: number;
  profession: string;
  company: string;
  city: string;
  linkedinUrl: string;
  batch: string;
  email: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'online' | 'offline';
  description: string;
  registeredCount: number;
  maxCapacity: number;
  isRegistered: boolean;
}

export interface Mentor {
  id: string;
  name: string;
  photo: string;
  expertise: string[];
  company: string;
  graduationYear: number;
  menteeCount: number;
  rating: number;
  isAvailable: boolean;
}

export interface Donation {
  id: string;
  amount: number;
  purpose: string;
  donorName: string;
  date: string;
  isAnonymous: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'alumni' | 'student' | 'admin';
  isAuthenticated: boolean;
}