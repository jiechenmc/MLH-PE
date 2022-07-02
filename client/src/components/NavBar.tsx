import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div className="fixed text-sm flex justify-center w-full z-50 backdrop-blur">
      <div>
        <ul className="menu menu-horizontal">
          <li>
            <a href="#home">
              <svg
                className="dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
              </svg>
              <p className="hidden md:block">About</p>
            </a>
          </li>
          <li>
            <a href="#education">
              <svg
                className="dark:fill-white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M23 24h-22v-2h1v-7h-2l3-9h5.429l2.571-2.203v-3.797h5l-1 1.491 1 1.509h-4l3.571 3h5.429l3 9h-2v7h1v2zm-12-5h-1v4h1v-4zm3 0h-1v4h1v-4zm6-4h-16v7h4v-5h8v5h4v-7zm-15 4h2v2h-2v-2zm14 0v2h-2v-2h2zm-14-3h2v2h-2v-2zm12 0h2v2h-2v-2zm.905-8l-1.297 1.513-4.608-3.949-4.608 3.949-1.297-1.513h-1.653l-1.667 5h18.45l-1.667-5h-1.653zm-5.905-.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1.5h-.763v1.8h1.763v-.8h-1v-1z" />
              </svg>
              <p className="hidden md:block">Education</p>
            </a>
          </li>
          <li>
            <a href="#projects">
              <svg
                className="stroke-black dark:stroke-white "
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
                  <path d="M9 20.027c-3 .973-5.5 0-7-3" />
                </g>
              </svg>
              <p className="hidden md:block">Projects</p>
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
