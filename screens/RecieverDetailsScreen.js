import React, {Component} from 'react';
import {View , Text, ScrollView,TouchableOpacity} from 'react-native';
import {Header, Card} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader'
 
export default class ReceiverDetailsScreen extends Component {
constructor(props){
  super(props);
  this.state={
    userId: firebase.auth().currentUser.email,
    recieverId:this.props.navigation.getParam('details')["user_id"],
    requestId:this.props.navigation.getParam('details')["request_id"],
    bookName: this.props.navigation.getParam('details')["book_name"],
    reason_to_request: this.props.navigation.getParam('details')["reason_to_request"],
    recieverName:'',
    recieverContact:'',
    recieverAddress:'',
    recieverRequestDocId:'',
  }
}

getRecieverDetails(){
  db.collection('users').where('email_id', '==', this.state.recieverId).get()
  .then(snapshot=>{
    snapshot.forEach(doc=>{
      this.setState({
        recieverName:doc.data().first_name,
        recieverContact:doc.data().contact,
        recieverAddress:doc.data().address,
      })
    })
  })
  
  db.collection('requested_books').where('request_id','==',this.state.requestId).get()
  .then(snapshot=>{
    snapshot.forEach(doc=>{
      this.setState({recieverRequestDocId : doc.id})
    })
  })
}

  componentDidMount(){
    this.getRecieverDetails()
  }

 sendNotification(){
   
 }

  render(){

    return(

       <View style = {{flex:1}}>

          <ScrollView>

         <View style = {{flex:0.1}}>
           <Header centerComponent={{text : "Donate Book", style:{fontWeight:"bold"}}} backgroundColor = '#b4a3f7'/>
         </View>
          <View style = {{flex:0.3}}>
            <Card title={"Book Information"}>
<Card> 
<Text>

 Book:{this.state.bookName}

</Text>
</Card>

<Card>
  <Text>
reason_to_request:{this.state.reason_to_request}

  </Text>
</Card>

             </Card> 
          </View>
          <View style = {{flex:0.3}}>
          <Card title={"Reciever Information"}>

      <Card>
        <Text>
          Name:{this.state.recieverName}
        </Text>
      </Card>

      <Card>
        <Text>
          Contact:{this.state.recieverContact}
        </Text>
      </Card>
        <Card>
          <Text>
            Address:{this.state.recieverAddress}
          </Text>
        </Card>

             </Card> 

          </View>
          <View style = {{flex:0.3}}>

             <TouchableOpacity onPress={()=>{
               this.sendNotification()
               this.updateBookStatus()
               this.props.navigation.navigate('MyDonations')
             }}>

             <Text>
              Want to donate the book?
             </Text>

             </TouchableOpacity>

          </View>
       
          </ScrollView>
       </View>

)

}


}