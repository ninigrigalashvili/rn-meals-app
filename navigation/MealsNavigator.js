import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import { Ionicons }from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle:  {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    } ,
    headerBackTitleStyle: { //for ios text next to go back arrow
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor

}


const MealsNavigator = createStackNavigator({
    Categories: {
    screen: CategoriesScreen,
   },
    CategoryMeals: {
        screen: CategoryMealScreen
    },
    MealDetail: MealDetailScreen
} , 
{
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
       
})

const FavNavigator = createStackNavigator({
    Favorites: {
        screen: FavouritesScreen
    },
    MealDetail: MealDetailScreen
}, {
    // initialRouteName: 'Favorites',
    defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig =            {
    Meals:  {
        screen:MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                 name='ios-restaurant'
                 size={25}
                 color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: 'Meals^_^'
        }
    },
    Favorites: {
        screen: FavNavigator,
    navigationOptions: {
            tabBarLabel: 'Favourites',
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                        name='ios-star'
                        size={25}
                        color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
    }
}

}

const MealsFavTabNavigator = Platform.OS === 'android' 
            ?  createMaterialBottomTabNavigator(tabScreenConfig, {
                activeColor: 'white',
                shifting: false,
                barStyle: {
                    backgroundColor: Colors.primaryColor
                }
            })
            : createBottomTabNavigator(
    tabScreenConfig , 
     {
  tabBarOptions: {
      labelStyle: {
          fontFamily: 'open-sans'
      },
      activeTintColor: Colors.accentColor
  }  
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    // navigationOptions: {
    //     drawerLabel: 'Filters!!!!!!!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    } ,
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator)
