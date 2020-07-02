/* importa as dependências a serem utilizadas no componente */
import React from 'react';
import {
    FlatList,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

/* comentário */
const width = Dimensions.get('screen').width;

/* comentário */
class PostComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        }
    }

    render() {
        const { foto } = this.state;

        return(
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{uri: foto.urlPerfil}} style={styles.fotoPerfil} />
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image source={{uri: foto.urlFoto}} style={styles.fotoPostagem} />

                <View style={styles.rodape}>
                    <TouchableOpacity>
                        <Image style={styles.botaoDeLike} source={require('../../assets/asset03.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

/* define a formatação de estilos do componente */
const styles = StyleSheet.create({
    cabecalho:{
        margin:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoPerfil: {
        margin:10,
        borderRadius:20,
        width: 40,
        height: 40
    },
    fotoPostagem: {
        width: width,
        height: width
    },
    botaoDeLike: {
        width: 25,
        height: 25
    },
    rodape: {
        margin: 10
    }
});

/* exporta a classe para ser reutilizada no projeto */
export default PostComponent;
