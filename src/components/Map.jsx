import React from "react";

const Map = () => {
  return (
    <div className="w-full">
      {/* Contact map area start here */}
      <h2 className="text-center pb-20">Our Location</h2>

      <div
        style={{
          width: "100%", // Default for mobile devices
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2667.0152201972737!2d77.04271220974215!3d28.47027907565262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19ad5c000001%3A0xd745a75ac17bebbe!2sADM%20EDUCATION%20SOCIETY!5e1!3m2!1sen!2sin!4v1732296701998!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact map area end here */}
      <style>
        {`
          /* Media query for small screens */
          @media (max-width: 768px) {
            div[style*="width: 90%"] {
              width: 95%; /* Increase width slightly for better mobile experience */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Map;
