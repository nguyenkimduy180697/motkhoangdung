export interface Speaker {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Session {
  id: string;
  sessionNumber?: string;
  time: string;
  speaker: string;
  title: string;
  subtitle?: string;
  description: string;
  hasCocktailIcon?: boolean;
}

export interface ScheduleDay {
  date: string;
  dayLabel: string;
  sessions: Session[];
}

export interface Gift {
  id: string;
  title: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  scale?: string;
}
