var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return React.createElement("h1", null, "HelloWord from learning ReactJS");
  }
});

React.render(
  React.createElement(HelloWorld, null),
  document.getElementById('root')
);
