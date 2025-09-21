import { Alumni, Event, Mentor, Donation } from '../types';

export const mockAlumni: Alumni[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
    graduationYear: 2018,
    profession: 'Software Engineer',
    company: 'Google',
    city: 'San Francisco',
    linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
    batch: '2014-2018',
    email: 'sarah.johnson@email.com'
  },
  {
    id: '2',
    name: 'Michael Chen',
    photo: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=200&h=200&fit=crop&crop=face',
    graduationYear: 2019,
    profession: 'Product Manager',
    company: 'Microsoft',
    city: 'Seattle',
    linkedinUrl: 'https://linkedin.com/in/michaelchen',
    batch: '2015-2019',
    email: 'michael.chen@email.com'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
    graduationYear: 2017,
    profession: 'Data Scientist',
    company: 'Netflix',
    city: 'Los Angeles',
    linkedinUrl: 'https://linkedin.com/in/emilyrodriguez',
    batch: '2013-2017',
    email: 'emily.rodriguez@email.com'
  },
  {
    id: '4',
    name: 'David Thompson',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=200&h=200&fit=crop&crop=face',
    graduationYear: 2020,
    profession: 'UX Designer',
    company: 'Adobe',
    city: 'New York',
    linkedinUrl: 'https://linkedin.com/in/davidthompson',
    batch: '2016-2020',
    email: 'david.thompson@email.com'
  },
  {
    id: '5',
    name: 'Lisa Wang',
    photo: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?w=200&h=200&fit=crop&crop=face',
    graduationYear: 2016,
    profession: 'Marketing Director',
    company: 'Tesla',
    city: 'Austin',
    linkedinUrl: 'https://linkedin.com/in/lisawang',
    batch: '2012-2016',
    email: 'lisa.wang@email.com'
  },
  {
    id: '6',
    name: 'James Wilson',
    photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=200&h=200&fit=crop&crop=face',
    graduationYear: 2021,
    profession: 'Financial Analyst',
    company: 'Goldman Sachs',
    city: 'New York',
    linkedinUrl: 'https://linkedin.com/in/jameswilson',
    batch: '2017-2021',
    email: 'james.wilson@email.com'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Alumni Reunion 2025',
    date: '2025-06-15',
    time: '18:00',
    location: 'University Main Campus',
    type: 'offline',
    description: 'Join us for our biggest alumni gathering of the year! Reconnect with classmates, enjoy great food, and celebrate our shared memories.',
    registeredCount: 245,
    maxCapacity: 500,
    isRegistered: false
  },
  {
    id: '2',
    title: 'Career Development Workshop',
    date: '2025-03-20',
    time: '14:00',
    location: 'Virtual Event',
    type: 'online',
    description: 'Expert-led workshop on career advancement, networking strategies, and professional development in the modern workplace.',
    registeredCount: 89,
    maxCapacity: 200,
    isRegistered: true
  },
  {
    id: '3',
    title: 'Tech Industry Networking Mixer',
    date: '2025-04-10',
    time: '19:00',
    location: 'Silicon Valley Hub',
    type: 'offline',
    description: 'Connect with tech industry alumni, share experiences, and explore collaboration opportunities.',
    registeredCount: 156,
    maxCapacity: 300,
    isRegistered: false
  },
  {
    id: '4',
    title: 'Entrepreneurship Panel Discussion',
    date: '2025-05-05',
    time: '16:00',
    location: 'Virtual Event',
    type: 'online',
    description: 'Learn from successful alumni entrepreneurs about their journey, challenges, and insights for building startups.',
    registeredCount: 78,
    maxCapacity: 150,
    isRegistered: false
  }
];

export const mockMentors: Mentor[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=200&h=200&fit=crop&crop=face',
    expertise: ['Software Engineering', 'Career Development', 'Technical Leadership'],
    company: 'Google',
    graduationYear: 2018,
    menteeCount: 12,
    rating: 4.9,
    isAvailable: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    photo: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=200&h=200&fit=crop&crop=face',
    expertise: ['Product Management', 'Strategy', 'Team Leadership'],
    company: 'Microsoft',
    graduationYear: 2019,
    menteeCount: 8,
    rating: 4.8,
    isAvailable: true
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=200&h=200&fit=crop&crop=face',
    expertise: ['Data Science', 'Machine Learning', 'Analytics'],
    company: 'Netflix',
    graduationYear: 2017,
    menteeCount: 15,
    rating: 4.7,
    isAvailable: false
  },
  {
    id: '4',
    name: 'Lisa Wang',
    photo: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?w=200&h=200&fit=crop&crop=face',
    expertise: ['Marketing', 'Brand Management', 'Digital Strategy'],
    company: 'Tesla',
    graduationYear: 2016,
    menteeCount: 10,
    rating: 4.9,
    isAvailable: true
  }
];

export const mockDonations: Donation[] = [
  {
    id: '1',
    amount: 1000,
    purpose: 'Scholarship Fund',
    donorName: 'Anonymous',
    date: '2025-01-15',
    isAnonymous: true
  },
  {
    id: '2',
    amount: 2500,
    purpose: 'Infrastructure Development',
    donorName: 'Sarah Johnson',
    date: '2025-01-10',
    isAnonymous: false
  },
  {
    id: '3',
    amount: 500,
    purpose: 'Student Activities',
    donorName: 'Michael Chen',
    date: '2025-01-08',
    isAnonymous: false
  }
];