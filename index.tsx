import { motion } from "framer-motion";

interface ImageItems {
  url: string;
}

const ExpandingPhotos = () => {
  const images: ImageItems[] = [
    { url: "https://placekitten.com/400/300" },
    { url: "https://placekitten.com/401/300" },
    { url: "https://placekitten.com/402/300" },
    { url: "https://placekitten.com/403/300" },
    { url: "https://placekitten.com/404/300" },
  ];

  // ... (the rest of the component code)
};

export default ExpandingPhotos;
