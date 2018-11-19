class TodoItems extends React.Component {
  
    static propTypes = {
      items: React.PropTypes.array.isRequired
    }

/*
Aquí se especifica que el input como props "items" es un array y que es requerido pasarlo.
No se puede renderizar el elemnento TodoItems sin un valor para este input (React te mostrará un aviso si se intenta)
*/
    
    constructor(props) {
      super(props);
    }
    
/*
No se está controlando ningún estado en el elemento TodoItems.
Es puramente una renderización basada en el input pasado como props (this.props.item).
Este componente puede ser simplemente representado como una función.
*/
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


/*
Aquí, se coge el array "items" pasado como input, se "mapea" cada elemento con map() con un elemento
<li> y con contenido del array original, entonces se devuelve un eletemnto <ul> agrupando todos los elementos
<li> que se han mapeado.
El atributo "key" es una característica interna de React que ayuda a React a identificar los hijos (childre)
dinámicos y qué hacer cuándo estos cambian (en este ejemplo no cambian).
Usar un index (con Key) aquí es una mala práctica. En vez de eso, se debería utilizar objetos en el items del "todo"
en vez de strings y dar a cada item "todo" un único id y utilizarlo como Key de React.
*/
