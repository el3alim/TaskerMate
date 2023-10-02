// A page-header component displaying the logo, title, and page-theme selectors.

import logo from "../assets/logo.png";

// The component takes in its arguments from the App component.
const Header = ({ children, theme, setTheme }) => {
  return (
    <header>
      <span className="logo">
        <img src={logo} alt="" />
        <span>{children}</span>
      </span>
      <span className="themeSelector">
        {/* On click events, the theme states' setter function of the App component is called.
                    The theme value is then checked through a ternary operator.
                    If the theme value is selected, the class "activeTheme" is added to apply its inherited css properties. */}
        <span
          className={theme === "light" ? "light activeTheme" : "light"}
          onClick={() => setTheme("light")}
        ></span>
        <span
          className={theme === "medium" ? "medium activeTheme" : "medium"}
          onClick={() => setTheme("medium")}
        ></span>
        <span
          className={theme === "dark" ? "dark activeTheme" : "dark"}
          onClick={() => setTheme("dark")}
        ></span>
        <span
          className={
            theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"
          }
          onClick={() => setTheme("gradientOne")}
        ></span>
        <span
          className={
            theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"
          }
          onClick={() => setTheme("gradientTwo")}
        ></span>
        <span
          className={
            theme === "gradientThree"
              ? "gradientThree activeTheme"
              : "gradientThree"
          }
          onClick={() => setTheme("gradientThree")}
        ></span>
      </span>
    </header>
  );
};

export default Header;
