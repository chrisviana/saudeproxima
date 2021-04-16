import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FFF'
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardsList: {
       marginTop: 32 
    },

    cards: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#eee',
        marginBottom: 16
    },

    cardsProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    cardsValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#35AEF1',
        fontSize: 15,
        fontWeight: 'bold'
    }
    
});