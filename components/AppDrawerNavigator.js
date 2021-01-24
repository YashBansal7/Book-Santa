import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator'
import {SideBarMenu} from './SideBarMenu';
import {Icon} from 'react-native-elements';
import MyDonations from '../screens/MyDonations';

export const AppDrawerNavigator = createDrawerNavigator({
                                                                                                                                          
  Home : {screen : AppTabNavigator,
  navigationOptions:{
    drawerIcon:<Icon name = 'home'
    type = 'fontawesome5' />
  } },

  MyDonations : {screen : MyDonations,
  navigationOptions:{
    drawerIcon:<Icon name = "gift"
    type = 'font-awesome'/>,drawerLabel:"MyDonations"
  }},



     Notification:{
       screen : NotificationScreen,
                navigationOptions:{
    drawerIcon:<Icon name = "bell"
    type = 'font-awesome'/>,drawerLabel:"Notification"
  }
},

MyRecievedBooks : {screen : MyRecievedBooks,
navigationOptions:{
  drawerIcon:<Icon name = 'gift'
  type = 'font-awesome'/>,drawerLabel:"MyRecievedBooks"
}},

  {contentComponent : SideBarMenu},

  {initialRoute : 'Home'}

)
