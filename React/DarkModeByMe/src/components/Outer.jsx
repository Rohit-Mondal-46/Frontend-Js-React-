import React from "react";
import Inner from "./Inner";
import { useThemeContext } from "../Contexts/ThemeContext";

function Outer() {
  const {theme} = useThemeContext();

  return (
    <>
      <div className={`container bg-${theme} text-${(theme=="light")? "dark":"light"} mt-4`}>
        <h1>Welcome to My Homepage</h1>
        <p>This is a simple example of a homepage using Bootstrap.</p>

        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, libero eget tincidunt aliquet, justo odio dignissim nunc,
            vel ultrices nisl elit nec justo.
          </p>
        </section>
        <Inner/>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Web Design</li>
            <li>Graphic Design</li>
            <li>Mobile App Development</li>
            <li>SEO Optimization</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Outer;
