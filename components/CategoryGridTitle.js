import React from 'react';
import { 
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Platfrom,
    TouchableNativeFeedback,
    Platform
    } from 'react-native'
import CategoriesScreen from '../screens/CategoriesScreen';
import { WorldAlignment } from 'expo/build/AR';

const CategoryGridTitle = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
    <View style={styles.gridItem}>
        <TouchableCmp 
        style={{flex: 1}} 
        onPress={props.onSelect}>
            <View 
            style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableCmp>
    </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >=21
         ? 'hidden'
         : 'visible',
        elevation: 5
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'        
    }
});

export default CategoryGridTitle