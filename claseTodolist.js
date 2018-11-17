class TodoList extends React.Component {

/*
La clase TodoList es la definición de la clase componente.
Es el plano que se usa siempre que se quiere mostrar una lista TODO en la Interficie de usuario (UI).
React instancia un objeto desde esta clase cuando se usa el <Todolist .../>, que será en la parte final de renderizado.
Este objeto se muestra en el navegador, y es al que se refiere cuando se utiliza "this" dentro de esta clase.
*/

  static propTypes = {
    todos: React.PropTypes.array
  };

/*
La propiedad propTypes define el tipo de inputs que este componente espera.
El input "todos", que aquí se utiliza como "this.props.todos" se espera que sea un array de cosas.
Si este componente recive un input "todos" que no es un array, debería mostar un aviso:"warning".
*/

  constructor(props) {
      
/*
El método constructor es llamado en primera instacia cuando se haga el "<TodoList itmes=.../>".
El argumento "props" es un objeto que sustenta todos los atributos que se pasan a  <TodoList .../>: {items:[...]}
*/

    super(props)
/*
Como TodoList es una clase Javascript que se extiende (hereda) de React.Component, es necesario invocar
al super constructor aquí (usando los mismos argumentos) para poder hacer oficialmente de TodoList un componente React.
(Si no se llamase a "super" aqui, TodoList simplemente ignoraría la herencia "inheritance")  
*/
    this.state = { todos: this.props.todos || [] }
  }
  
/*
Esta línea inicializa el estado del elemento <TodoList ../> (recuerda, "this") es el elemento que tenemos en el DOM que es usado en el componente TodoList como plano).
El estado (state) es un POJO, con una propiedad "todos" que lee su valor incial del input de "props" (será el que se pase al final como "red" y "blue").
El "||[]" del final funcionará si no se pasa nada en la última línea y debería inicializar el estado de la propiedad "todos" a un array vacío. 
Después de esta línea, "this.state.todos" será ['red', 'blue']
 */

   addTodo = (item) => {
    this.setState({todos: this.state.todos.concat([item])});
  }

/*
El método "addTodo" es pasado más adelante en el elemento TodoInput como callback.
Este método espera un objeto "item", y lo añade al actual estado del array "state.todos" que está siendo controlado por el elemento TodoList.
"setState" es la manera que tiene React de mantener el control de los cambios ya que React necesita "reacionar" a los cambios.
En todos los sitios se usa "this.state.todos" en el componente TodoList. 
React usará las diferencias del Dom Virtual para llevar el cambio al navegador.
En el método "render" React re-renderizará el elemento TodoItems cada vez que se llame al método "addTodo".
*/

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

/*
El valor devuelto aquí es la salida del componente, el cual es el Dom Virtual de un elemento creado desde este componente.
*/