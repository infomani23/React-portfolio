import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="nav">
  <h2>Manikandan Nagarathinam</h2>

  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

</nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Hi, I'm Manikandan</h1>
        <h2>Frontend Developer</h2>
        <p>Building modern responsive web applications using React.</p>
       <a href="#projects"><button>View Projects</button></a>
      </section>  

      {/* About */}
      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          Frontend Developer with experience in HTML, CSS, JavaScript and React.
          Skilled in building responsive UI and modern web applications.
        </p>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Hooks</span>
          <span>SQL</span>
          <span>Git</span>
          <span>Vercel</span>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="projects">

          <div className="card">
            <h3>React Task manager</h3>
            <p>Task manager with add, delete and localStorage.</p>
            <a href="https://task-manager-ten-eosin-97.vercel.app/" target="blank">View Project</a>
          </div>

          <div className="card">
            <h3> React Weather App</h3>
            <p>Weather application using API.</p>
            <a href="https://weather-app-gamma-rosy-64.vercel.app/" target="blank">View Project</a>
          </div>

          <div className="card">
            <h3>React Ecommerce UI</h3>
            <p>Product listing with add to cart.</p>
            <a href="https://react-e-commerce-zeta-ten.vercel.app/" target="blank">View Project</a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <h2>Contact</h2>
        <p>Email: manikandaninfo23@gmail.com</p>
        <p>Mobile: +91 6382242409</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/manikandannagarathinam" target="blank">Manikandan Nagarathinam</a></p>
        <p>GitHub: <a href="https://github.com/infomani23?tab=repositories" target="blank">MyGithub</a></p>
      </section>

    </div>
  );
}

export default App;