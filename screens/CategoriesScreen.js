import React from 'react';
import { 
    FlatList,
    StyleSheet
    } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'; 

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTitle 
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }}
            />
        )
    }

    return (
        <FlatList 
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
        />
    )
}


CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft:(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
                />
            </HeaderButtons>
        ) 
    }
  
}
 

const styles = StyleSheet.create({

})

export default CategoriesScreen;