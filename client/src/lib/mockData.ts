import { Calendar, MapPin, Star, Trophy, Users, Clock, CreditCard } from "lucide-react";

// Types
export type SportType = "Futsal" | "Badminton" | "Basketball" | "Tennis" | "Volleyball";

export interface Venue {
  id: string;
  name: string;
  type: SportType;
  location: string;
  address: string;
  pricePerHour: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  facilities: string[];
  coordinates: { lat: number; lng: number };
}

export interface Booking {
  id: string;
  venueId: string;
  date: Date;
  time: string;
  duration: number;
  totalPrice: number;
  status: "confirmed" | "pending" | "completed" | "cancelled";
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  bookings: Booking[];
}

// Mock Data

// Import images (using paths relative to src/App.tsx context or public)
// Ideally these would be the generated images, but for mock data file we'll use the paths
// In a real app we'd import them, but for this data file we'll use string paths 
// and handle imports in the components that use them

import heroImg from "@assets/generated_images/hero_background_of_diverse_people_playing_sports_like_futsal_and_badminton_energetically.png";
import futsalImg from "@assets/generated_images/modern_indoor_futsal_court_with_artificial_grass.png";
import badmintonImg from "@assets/generated_images/professional_badminton_court_with_green_flooring.png";
import basketImg from "@assets/generated_images/outdoor_basketball_court_at_sunset.png";

export const MOCK_VENUES: Venue[] = [
  {
    id: "v1",
    name: "LaPed Arena Center Cikarang",
    type: "Futsal",
    location: "Cikarang Utara",
    address: "Jl. Gatot Subroto No. 45, Pilar, Cikarang Utara",
    pricePerHour: 120000,
    rating: 4.8,
    reviewCount: 124,
    image: futsalImg,
    description: "Lapangan futsal standar internasional terbesar di Cikarang Utara. Rumput sintetis kualitas terbaik dengan tribun penonton.",
    facilities: ["Wifi", "Shower", "Locker", "Canteen", "Parking"],
    coordinates: { lat: -6.28, lng: 107.15 }
  },
  {
    id: "v2",
    name: "Jababeka Badminton Hall",
    type: "Badminton",
    location: "Cikarang Baru (Jababeka)",
    address: "Jl. Usaha No. 1, Kawasan Industri Jababeka II",
    pricePerHour: 75000,
    rating: 4.6,
    reviewCount: 89,
    image: badmintonImg,
    description: "Hall badminton premium di jantung kawasan industri Jababeka. 6 lapangan karpet standar BWF dengan pencahayaan anti-glare.",
    facilities: ["Pro Shop", "Toilet", "Parking", "Water Refill"],
    coordinates: { lat: -6.30, lng: 107.16 }
  },
  {
    id: "v3",
    name: "Lippo Cikarang Hoops",
    type: "Basketball",
    location: "Lippo Cikarang",
    address: "Jl. MH Thamrin, Cibatu, Cikarang Selatan",
    pricePerHour: 180000,
    rating: 4.9,
    reviewCount: 210,
    image: basketImg,
    description: "Lapangan basket outdoor modern di area komersial Lippo Cikarang. Lantai rubber berkualitas tinggi, cocok untuk main malam hari.",
    facilities: ["Lighting", "Bench", "Vending Machine", "Cafe"],
    coordinates: { lat: -6.33, lng: 107.13 }
  },
  {
    id: "v4",
    name: "Deltamas Sport Center",
    type: "Futsal",
    location: "Cikarang Pusat (Deltamas)",
    address: "Jl. Ganesha Boulevard, Kota Deltamas",
    pricePerHour: 110000,
    rating: 4.5,
    reviewCount: 56,
    image: futsalImg,
    description: "Pusat olahraga terpadu di Deltamas. Lapangan futsal luas dengan sirkulasi udara yang sangat baik.",
    facilities: ["Parking", "Toilet", "Musholla", "Shower"],
    coordinates: { lat: -6.36, lng: 107.17 }
  },
  {
    id: "v5",
    name: "Cibarusah Badminton Court",
    type: "Badminton",
    location: "Cikarang Selatan",
    address: "Jl. Raya Cibarusah No. 88, Serang",
    pricePerHour: 60000,
    rating: 4.7,
    reviewCount: 112,
    image: badmintonImg,
    description: "Lapangan badminton favorit warga Cikarang Selatan. Harga terjangkau dengan fasilitas yang bersih dan nyaman.",
    facilities: ["Shower", "Locker", "Kantin", "Parkir Motor Luas"],
    coordinates: { lat: -6.35, lng: 107.10 }
  }
];

export const MOCK_USER: User = {
  id: "u1",
  name: "Radit Suryana",
  email: "radit@example.com",
  points: 1250,
  bookings: [
    {
      id: "b1",
      venueId: "v1",
      date: new Date(Date.now() - 86400000 * 2), // 2 days ago
      time: "19:00",
      duration: 2,
      totalPrice: 300000,
      status: "completed"
    },
    {
      id: "b2",
      venueId: "v2",
      date: new Date(Date.now() + 86400000), // tomorrow
      time: "20:00",
      duration: 1,
      totalPrice: 80000,
      status: "confirmed"
    }
  ]
};

export const CATEGORIES = [
  { name: "Futsal", icon: Trophy },
  { name: "Badminton", icon: Users }, // Using Users as generic representation or maybe activity
  { name: "Basketball", icon: Users },
  { name: "Tennis", icon: Trophy },
  { name: "Volleyball", icon: Users },
];
