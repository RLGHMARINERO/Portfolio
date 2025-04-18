// src/components/WhatsappFloatButton.jsx
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsappFloatButton = () => {  
    return (
        <a
            href="https://wa.me/529995313954"
            target="_blank"
            rel="noreferrer"
            style={styles.floatingButton}
            >
            <AiOutlineWhatsApp color="#fff" size={48} />
        </a>
    );
};
const styles = {
    floatingButton: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 9999,
      backgroundColor: "#25D366",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
}

export default WhatsappFloatButton;
