const root = ReactDOM.createRoot(document.querySelector(".root"));

const parent = React.createElement("div", { Class: "parent" },
    [React.createElement("div", { Class: "child1" },
        React.createElement("h1", { Class: "h1" }, "heading from child1")),
    React.createElement("div", { Class: "child2" },
        React.createElement("h1", { Class: "h1" }, "heading from child2"))
    ]);



root.render(parent);