<script setup>
const list = document.querySelectorAll(".nav__item");
list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});
</script>

<template>
  <!-- Footer -->
  <footer class="pt-5" id="page-footer">
    <slot>
      <nav
        class="navbar bg-amethyst-darker border-top navbar-expand fixed-bottom"
      >
        <ul class="navbar-nav nav-justified w-100">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">
              <svg
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1.5em"
                height="1.5em"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19,20H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v18C20,19.6,19.6,20,19,20z M2,18h16V2H2V18z"
                  ></path>
                  <rect x="5" y="5" width="10" height="2"></rect>
                  <rect x="5" y="9" width="10" height="2"></rect>
                  <rect x="5" y="13" width="10" height="2"></rect>
                </g>
              </svg>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">
              <svg
                width="1.5em"
                height="1.5em"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19,20H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v17h17c0.6,0,1,0.4,1,1S19.6,20,19,20z"
                  ></path>
                  <rect x="4" y="12" width="3" height="4"></rect>
                  <rect x="9" y="5" width="3" height="11"></rect>
                  <rect x="14" y="9" width="3" height="7"></rect>
                </g>
              </svg>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">
              <svg
                width="1.5em"
                height="1.5em"
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M18,20H2c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S18.6,20,18,20z"
                  ></path>
                  <path
                    d="M7,16H3c-0.6,0-1-0.4-1-1v-4c0-0.3,0.1-0.5,0.3-0.7l10-10c0.4-0.4,1-0.4,1.4,0l4,4c0.4,0.4,0.4,1,0,1.4l-10,10 C7.5,15.9,7.3,16,7,16z M4,14h2.6l9-9L13,2.4l-9,9V14z"
                  ></path>
                </g>
              </svg>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/menu">
              <svg
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
              >
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M19,0h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h3.6l-4.3,4.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0L18,3.4V7c0,0.6,0.4,1,1,1 s1-0.4,1-1V1C20,0.4,19.6,0,19,0z"
                  ></path>
                  <path
                    d="M8,1c0-0.6-0.4-1-1-1H1C0.5,0,0,0.5,0,1v6c0,0.6,0.4,1,1,1s1-0.4,1-1V3.4l4.3,4.3C6.5,7.9,6.7,8,7,8s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L3.4,2H7C7.6,2,8,1.6,8,1z"
                  ></path>
                  <path
                    d="M20,13c0-0.6-0.4-1-1-1s-1,0.4-1,1v3.6l-4.3-4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.3,4.3H13c-0.6,0-1,0.4-1,1s0.4,1,1,1 h6c0.5,0,1-0.5,1-1V13z"
                  ></path>
                  <path
                    d="M7,18H3.4l4.3-4.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L2,16.6V13c0-0.6-0.4-1-1-1s-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6 c0.6,0,1-0.4,1-1S7.6,18,7,18z"
                  ></path>
                </g>
              </svg>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </slot>
  </footer>
  <!-- https://www.svgrepo.com/collection/interface-duotone-icons-2/ -->
  <!-- END Footer -->
</template>
