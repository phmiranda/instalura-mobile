/* importa as dependências a serem utilizadas no componente */
import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import PostComponent from "./src/component/PostComponent";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
        .then(response => response.json())
        .then(json => this.setState({fotos: json}))
  }

  render() {
    return(
        <FlatList style={styles.container}
          keyExtractor={item => item.id}
          data={this.state.fotos}
          renderItem={ ({item}) =>
            <PostComponent foto={item}/>
          }
        />
    );
  }
}

/* define a formatação de estilos do componente */
const styles = StyleSheet.create({
  container: {
    marginTop:20
  }
});

/* exporta a classe para ser reutilizada no projeto */
export default App;
