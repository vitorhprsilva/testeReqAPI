import { StyleSheet, StatusBar} from 'react-native'
const styles = StyleSheet.create({
    imagem: {
        justifyContent: 'flex-start', 
        margin: 30, 
    },
    tinyLogo: {
        width: 150,
        height: 150,
    },
    informacoes:{
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    nome: {
        marginTop: 20,
        fontSize: 40,
        fontWeight: "bold",
    },
    email: {
        fontSize: 20,
    },
});

export default styles;