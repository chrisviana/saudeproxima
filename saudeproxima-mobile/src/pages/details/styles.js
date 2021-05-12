import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        //paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#FFF"
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    logo: {
        resizeMode: "contain",
        height: 100,
        width: 200,

    },

    imagemFundo: {
        flex:2,
        resizeMode: 'repeat',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    cards: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 200,
        marginBottom: 16,
        flex: 1

    },

    cardsProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    cardsValue: {
        marginLeft: 10,
        fontSize: 15,
        color: '#7D7D7D'

    },

    nomeUnidade: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#35AEF1"
    },

    dadosDoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    btnAbrirMapa: {
        backgroundColor: "#0DAC30",
        width: 30,
        borderRadius: 20,
        marginLeft: 10
    },

    textAbrirMapa:{
        color: "#FFF",
        marginLeft: 10,
        fontWeight: 'bold'
    },

    emergencia: {
        backgroundColor: "#ff2700",
        fontWeight: 'bold',
        paddingLeft: 10
    },
    
    muitoUrgente: {
        backgroundColor: "#F85E08",
        fontWeight: 'bold',
        paddingLeft: 10
    },
    
    urgente: {
        backgroundColor: "#F8E008",
        fontWeight: 'bold',
        paddingLeft: 10
    },
    
    poucoUrgente: {
        backgroundColor: "#04A330",
        fontWeight: 'bold',
        paddingLeft: 10
    },
    
    naoUrgente: {
        backgroundColor: "#07C4FF",
        fontWeight: 'bold',
        paddingLeft: 10
        
    },

    categorias: {
        marginTop: 10,
        
    },

    pulseiras:{
        fontSize: 15,
        fontWeight: 'bold',
        color: "#35AEF1",
        flexDirection: 'row'
        
    },

    cardPulseiras:{
        flexDirection: 'column',
        alignItems: 'center'
    },

    enderecoValue: {
        marginLeft: 10,
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#7D7D7D'
    },

    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
      },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#66C6E4",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});