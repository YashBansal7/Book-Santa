import React from 'react';
import {View , StyleSheet} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/Icon';
import {DrawerItems} from 'react-navigation-drawer'

export default class SideBarMenu extends React.Component{

 render(){

  return(

    <View style={{flex:1 , justifyContent:"center" , backgroundColor:"aqua" , alignItems:"center" }}>  
    <Avatar rounded
    source={{uri:this.state.image,}}
    size = "xlarge"
    onPress={()=> this.selectPicture()}
    showEditButton
    />

      <Text style={{fontWeight:'300', fontSize:RFValue(20), color:'#fff' ,padding:RFValue(10) }}>LogOut</Text>

      <Icon name="Logout" 
      type="anddesign"
      size={RFValue(20)}
      iconStyle={{paddingLeft:RFValue(10)}} />

      <View style={styles.drawerContainer}>
      <DrawerItems {...this.props} /> 
    </View>
    <View style={styles.logOutContainer}>
      <TouchableOpacity style={styles.lo}>
        
      </TouchableOpacity>
    </View>
    </View>

  )

 }

}
const styles = StyleSheet.create({
  drawerContainer:{
    flex:0.8,
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold',
    fontFamily:'Comic Sans Ms'
  }
})