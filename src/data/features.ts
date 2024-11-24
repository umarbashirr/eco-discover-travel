import { Reason } from "@/interfaces/feature.interface";
import { CheckCircle, Compass, Leaf, MapPin } from "lucide-react";

export const features: Reason[] = [
  {
    title: "Personalized Itineraries",
    description:
      "We create customized travel plans tailored to your preferences and interests, ensuring a unique and enjoyable journey.",
    icon: MapPin,
  },
  {
    title: "Local Expertise",
    description:
      "Our team has in-depth knowledge of the region, offering authentic experiences and insider tips.",
    icon: Compass,
  },
  {
    title: "Responsible Travel",
    description:
      "We prioritize eco-friendly practices and support local communities to ensure sustainable tourism.",
    icon: Leaf,
  },
  {
    title: "Hassle-Free Experience",
    description:
      "Enjoy a smooth travel experience with our end-to-end planning and support.",
    icon: CheckCircle,
  },
];
