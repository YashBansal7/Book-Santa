import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookRequest from '../screens/BookRequest';
import {AppStackNavigator} from './AppStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{screen: AppStackNavigator}, 
    BookRequest:{screen: BookRequest}
    
})

