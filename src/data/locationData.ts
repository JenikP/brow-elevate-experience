
import { LocationData } from "../types/location";

export const locations: LocationData[] = [
  {
    id: 1,
    storeId: "location1",
    name: "Brandon Park",
    address: "Brandon Park Shopping Center (opposite The Reject Shop)",
    description: "Our friendly shop is designed to maintain your privacy, ensuring a comfortable experience.",
    coordinates: { lat: -37.9007, lng: 145.1618 },
    phone: "+61415469594",
    image: "/lovable-uploads/4a6d259e-2c69-4327-9302-2fd3265a87cc.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  },
  {
    id: 2,
    storeId: "location2",
    name: "Southland",
    address: "Located conveniently at Southland Shopping Center",
    coordinates: { lat: -37.9594, lng: 145.0544 },
    phone: "+61497719761",
    image: "/lovable-uploads/7a21f579-60ff-4e22-8b2f-842740b8344c.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  },
  {
    id: 3,
    storeId: "location3",
    name: "Pakenham",
    address: "Pakenham Shopping Centre",
    description: "Our kiosk ensures both privacy and quick access to all services.",
    coordinates: { lat: -38.0755, lng: 145.4845 },
    phone: "+61415469594",
    image: "/lovable-uploads/b00dd5a9-7c39-4752-aea4-ca3ebb458783.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  },
  {
    id: 4,
    storeId: "location4",
    name: "Stud Park",
    address: "StudPark Shopping Centre (opposite Coles)",
    coordinates: { lat: -37.9082, lng: 145.2305 },
    phone: "+61415469594",
    image: "/lovable-uploads/dc9795c0-3c3a-4a66-99fc-7aa4e2490b74.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  },
  {
    id: 5,
    storeId: "location5",
    name: "Heidelberg",
    address: "Heidelberg Shopping Centre (near TK Maxx)",
    coordinates: { lat: -37.7566, lng: 145.0695 },
    phone: "+61415469594",
    image: "/lovable-uploads/warringal.png",
    hours: {
      "Monday – Wednesday": "9:00 am – 5:30 pm",
      "Thursday – Friday": "9:00 am – 7:00 pm",
      "Saturday": "9:00 am – 5:00 pm",
      "Sunday/Public Holidays": "10:00 am – 5:00 pm"
    }
  }
];
