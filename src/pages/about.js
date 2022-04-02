import React from "react";
import Footer from './Footer';
import Coding from "./Coding";

export default function About() {
    return (
        <div className="About"> 
        <div className="container">
          <h1>About</h1>
          <div className="row">
              <div className="col">
                  <section>
                      <p>I recently finished a React coding cap. I want to keep going. Now, I am doing a tutorial to learn how to make a navbar in React! 
                          The tutorial is from <a href="https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/">
                          GeeksforGeeks.</a>I am learning new things. I am going beyond what is 
                          listed in the directions. I am flexing my muscles and incorporating 
                          some bootstrap. This is a nonsense practice exercise. 
                          I learned to make single page React apps. 
                          I wanted the experience of making something with multiple pages.</p>
                    </section>
                    </div>
                    <div className="col">
                        <Coding />
                    </div>
                    </div>
                  <Footer />
                  </div>
                  </div>
    );
}