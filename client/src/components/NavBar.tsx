import ThemeToggle from "./ThemeToggle";
const NavBar = () => {
  return (
    <div className="text-sm breadcrumbs ml-2 flex justify-center bg-base-200">
      <ThemeToggle />
      <ul>
        <li>
          <a href="#home">
            <svg
              className="mr-2 dark:fill-white scroll-smooth"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="#education">
            <svg
              className="mr-2 dark:fill-white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" />
            </svg>
            Education
          </a>
        </li>
        <li>
          <a href="#projects">
            <svg
              className="mr-2 dark:fill-white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z" />
            </svg>
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
