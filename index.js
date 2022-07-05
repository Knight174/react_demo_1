// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program.";
// h1.className = "header"
// document.getElementById("root").append(h1);

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
const root = ReactDOM.createRoot(document.getElementById('root'))

// JSX
const element = <h1 className="header">Hello, React!</h1>
console.log(element)
// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "className": "header",
//         "children": "Hello, React!"
//     },
//     "_owner": null,
//     "_store": {}
// }

root.render(element)
