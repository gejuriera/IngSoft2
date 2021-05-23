import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2021-05-15"}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 300}}
        date={this.state.date}
        mode="date"
        placeholder="Seleccione la fecha"
        format="YYYY-MM-DD, h:mm:ss a"
        minDate="2021-05-01"
        maxDate="2021-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
   
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}