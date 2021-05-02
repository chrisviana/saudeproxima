import { StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        //paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 30,
        backgroundColor: '#FFF'
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    imagemFundo: {
        flex:2,
        resizeMode: 'repeat',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
       
    logo: {
        resizeMode: "contain",
        height: 100,
        width: 200,

    },

    viewLogo: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    
    cardsList: {
        marginTop: 200
    },

    cards: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginLeft: 20,
        marginRight: 20
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

    enderecoValue: {
      fontSize: 15,
        textDecorationLine: 'underline',
        color: '#7D7D7D'
    },


    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#35AEF1",
        borderRadius: 10,
        width: 200
    },

    detailsButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center'
    },

    dadosDoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    buttonVisulizarMais:{
        borderRadius: 50,
        
    },

    viewBtn:{
        flexDirection: 'column', 
        alignItems: 'center'
    },
    
    dadosBtn:{
        flexDirection: 'row', 
        alignItems: 'center', 
        marginLeft: 25
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
    }
    
});