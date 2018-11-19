class TodoInput extends React.Component {
    
    constructor (props) {
       super(props);
       this.state = {item: ''};
    }
    
/*
TodoInput podría decirse que es un Componente controlador de inputs.
El estado "input" se usa solo para representar el valor del texto del elemento input.
Este estado no es parte del estado del nuclio de la aplicación.
*/
    onChange = (e) => {
      this.setState({item: e.target.value});
    }
    
/*
Cada vez que hay un cambio en el valor del texto en el input, se sincroniza el nuevo vlaor en this.state.item.
*/

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.item);

/*
Cuando apretamos el botón de enviar (submit), se está llamando al callback "addTodo" con un argumento que sustenta el valor del input del usuario.
Se usa this.state.item para ese argumento ya que el estado está sincronizado con el texto que se pasa al input.
Con este método no es necesario usar el DOM para leer el valor ya que React sabe cuando hay cambios en el input.
El callback "addTodo" e slo que recibe <TodoInput /> cuando es inicializado por el método render de <TodoList /> .
Es un método en TodoList pero TodoList da permiso a TodoInput para ejecutarlo.
Esto es lo que se conoce en React como "inverse data flow" .
*/

      this.setState({item: ''}, function() {
        this.refs.item.focus();
      });
    }
    
/*
Después de invocar el callback, se usta el estado para resetear el valor del texto en el input, ya que estos 2 valores están sincronizados, el UI lo cambiará también.
El segundo argumento de este this.setState es una función callback que se ejecuta cuando las operaciones de setState se hacen.
Aquí, este código se usa como la llamada API al DOM para centrarse en el texto del elemento input.
Esto es un ejemplo de como la parte no visible en React y su DOM virtual y como accede a los elementos a través de este DOM API.
Para acceder al elemento en el DOM directamente, se identifica con ref="item", y después se usa this.refs.item para acceder a este.
*/


    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.item} ref="item" />
          <input type="submit" value="Add"/>
        </form>
      );
    }
  };

/*
Se sincroniza el input pasándole un valor maepado a un propiedad de estado. 
El valor "ref" es el que se ha usado con this.refs.
*/
