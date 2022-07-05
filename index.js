// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program.";
// h1.className = "header"
// document.getElementById("root").append(h1);

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const root = ReactDOM.createRoot(document.getElementById('root'))

const navbar = (
  <nav>
    <h1>Eric</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

root.render(navbar)
