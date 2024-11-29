import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* <!-- Sidebar area start here --> */}
      <div id="targetElement" class="sidebar-area sidebar__hide light-area">
        <div class="sidebar__overlay"></div>
        <a href="index.html" class="logo mb-40">
          <img src="src/assets/images/logo/logo.svg" alt="logo" />
        </a>
        <div class="sidebar__search mb-30">
          <input type="text" placeholder="Search..." />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="mobile-menu overflow-hidden"></div>
        <ul class="info pt-40">
          <li>
            <i class="fa-solid primary-color fa-location-dot"></i>{" "}
            <a href="mailto:info@countryedu.com">Sector 11, Gurugram</a>
          </li>
          <li class="py-2">
            <i class="fa-solid primary-color fa-phone-volume"></i>{" "}
            <a href="tel:+919151179111">+91-9151179111</a>
          </li>
          <li>
            <i class="fa-solid primary-color fa-paper-plane"></i>{" "}
            <a href="mailto:info@countryedu.com">info@countryedu.com</a>
          </li>
        </ul>
        <div class="social-icon mt-20">
          <a href="#0">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#0">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#0">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#0">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
        <button id="closeButton" class="text-white">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      {/* <!-- Sidebar area end here --> */}
    </div>
  );
};

export default Sidebar;
