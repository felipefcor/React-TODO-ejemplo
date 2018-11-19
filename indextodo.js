
class TodoList extends React.Component {

    static propTypes = {
      todos: React.PropTypes.array
    };
  
    constructor(props) {
      super(props)
      this.state = { todos: this.props.todos || [] }
    }
    
    addTodo = (item) => {
      this.setState({todos: this.state.todos.concat([item])});
    }
  
    render () {
      return (
        <div>
          <h3>TODO List</h3>
          <TodoItems items={this.state.todos}/>
          <TodoInput addTodo={this.addTodo}/>
        </div>
      );    
    }
  };
  
  class TodoItems extends React.Component {
  
    static propTypes = {
      items: React.PropTypes.array.isRequired
    }
    
    constructor(props) {
      super(props);
    }
    
    render () {
      let createItem;
        
      createItem = (item, index) => {
        return (
          <li key={index}>{item}</li>
        );
      };
      return <ul>{this.props.items.map(createItem)}</ul>;
    }
  };
  
  class TodoInput extends React.Component {
    
    constructor (props) {
       super(props);
       this.state = {item: ''};
    }
    
    onChange = (e) => {
      this.setState({item: e.target.value});
    }
    
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.item);
      this.setState({item: ''}, function() {
        this.refs.item.focus();
      });
    }
    
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.item} ref="item" />
          <input type="submit" value="Add"/>
        </form>
      );
    }
  };


  ReactDOM.render(
    <TodoList todos={['red','blue']} />,    
    document.getElementById('container')
  );
