import React from 'react';
import {View,Text,TouchableOpacity ,KeyBoardAvoidingView , TextInput, Stylesheet , ScrollView } from 'react-natve';
import MyHeader from '..components/MyHeader'
import db from '../config';
import firebase from 'firebase';

export default class ProfileSettings extends React.Component {

constructor(){

  super();
this.state={
    firstName:'',
    lastName:'',
    address:'',
    contact:'',
    emailId:'',
    docId:''
}
}
    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id', '==', email).get()
        .then(snapshot =>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                this.setSate({
                    emailId : data.email_id,
                    firstName : data.first_name,
                    lastName: data.last_name,
                    address : data.address,
                    contact: data.contact
                })
            })
        })
    }

    componentDidMount(){
        this.getUserDetails()
    }

  updateUserDetails = () =>{
    db.collection('users').doc(this.state.docId).update({
        first_name:this.state.firstName,
        last_name : this.state.lastName,
        address : this.state.address,
        contact: this.state.contact
    })
  }  
 render(){

  return (
    <View>
      <MyHeader title = "Profile Settings" navigation={this.props.navigation}/>

      <View style={styles.formContainer}>
           
      <Text style={styles.formHead}>First Name</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value = {this.state.firstName}
        />

<Text style={styles.formHead}>Last Name</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
          value = {this.state.lastName}
        />

<Text style={styles.formhead}>Contact</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value = {this.state.contact}
        />
        <Text style={styles.formhead}>Address</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          //i can hear u


          value = {this.state.address}
        />
          
<TouchableOpacity style={styles.button}
    onPress={()=>{this.updateUserDetails()} 

}>


 <Text style={styles.buttonText}> Update </Text>

</TouchableOpacity>

      </View>
    </View>
    

  )

 }

}

const styles = Stylesheet.create({
    formContainer:{
        flex:1,
        width:'100%',
        alignItems: 'center'
    },
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },

      formHead:{
        marginTop:20,
       marginRight:160,
        fontSize:15
      },
      formhead:{
        marginTop:20,
        marginRight:180,
        fontSize:15
      },
      button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    marginTop:20
      },

      buttonText:{
        fontSize:25,
        fontWeight:"bold",
        color:"#fff"
      }
      })