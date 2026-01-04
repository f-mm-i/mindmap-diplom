import {StyleSheet} from "react-native";
import {RFValue} from 'react-native-responsive-fontsize';

export const CommonStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: RFValue(20),
        fontWeight: '600',
    },
    cardsContainer: {},
    drawerContainer: {flex: 1, padding: 16, backgroundColor: '#fff'},
    userInfo: {alignItems: 'center', marginBottom: 20},
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    avatarText: {fontSize: 24, fontWeight: '600'},
    userName: {fontSize: 18, fontWeight: '600'},
    drawerMenu: {flex: 1},
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    drawerText: {marginLeft: 16, fontSize: 16},
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
});
