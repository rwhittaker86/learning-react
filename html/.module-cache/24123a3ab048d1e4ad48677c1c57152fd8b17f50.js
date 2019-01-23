var HelloMessage = React.createClass({displayName: "HelloMessage",
  render: function() {
    return (
      React.createElement("h1", null, "Have a good day!")
    );
  }
});
React.render(React.createElement(HelloMessage, null),document.body);
