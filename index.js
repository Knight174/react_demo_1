// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program.";
// h1.className = "header"
// document.getElementById("root").append(h1);

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const root = ReactDOM.createRoot(document.getElementById('root'))

function Header () {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="./logo192.png" alt=""/>
        <ul className="nav-items">
          <li>Docs</li>
          <li>Tutorial</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer () {
  return (
<footer>
        <small>&copy;2022 Eric development. All rights reserved.</small>
      </footer>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

root.render(<Page />)
