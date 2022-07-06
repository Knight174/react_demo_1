// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program.";
// h1.className = "header"
// document.getElementById("root").append(h1);

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const root = ReactDOM.createRoot(document.getElementById('root'))

const page = (
  <div>
    <img src="./logo192.png" alt="" width="40px" />
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

root.render(page)
