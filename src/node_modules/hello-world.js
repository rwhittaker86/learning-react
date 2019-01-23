var HelloWorld = React.createClass({
  render: function() {
    return <h1>HelloWord from learning ReactJS</h1>;
  }
});

React.render(
  <HelloWorld />,
  document.getElementById('root')
);
