const rootElem = ReactDOM.createRoot(document.getElementById("root"));
rootElem.render(React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "chld"
}, [
    React.createElement("h1", {}, "hello from heading 1"),
    React.createElement("h2", {}, "hello from heading 2")
]))); // Reason why jsx was introduced as above was complex

//# sourceMappingURL=episode1.672d4772.js.map
