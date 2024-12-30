import React from "react";
import ReactDOM from "react-dom/client";
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

    return (
        <div className="wrapper">
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 12,
                }}
            >
                {images.map((image) => {
                    return (
                        <motion.div
                            className="prevent-select"
                            key={image.url}
                            style={{
                                padding: 3,
                                height: 40,
                                width: 40,
                                cursor: "pointer",
                                display: "grid",
                                placeItems: "center",
                            }}
                            whileHover={{
                                y: -18,
                                height: 48,
                                width: 80,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                        >
                            <motion.img
                                layout
                                src={image.url}
                                style={{
                                    objectFit: "cover",
                                    cursor: "pointer",
                                    borderRadius: 4,
                                    backgroundColor: "#C9C9C9"
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ExpandingPhotos />
    </React.StrictMode>
);

export default ExpandingPhotos;
