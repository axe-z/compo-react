import React, {Component} from "react";
import {Form, FormControl, Button} from 'react-bootstrap';
import AgeStats from './AgeStats.js';

class FormCompo extends Component {
   state= {
     newDate: '',
     fete: '1977-01-15',
     show: false,
     disabled: true
   }
   changeDate = () => {
      console.log(this.state)
      this.setState(() => ({fete: this.state.newDate, show: true  }));
   }
   render() {
     return (
       <div>
         <Form inline>
           <h2>Votre fete ?</h2>
           <FormControl type="date"
             onChange={ (e) => {
             const valeur =  e.target.value;
             this.setState(() => ({ newDate: valeur, disabled: false }))}
           }>
           </FormControl>
           {' '}
           <Button onClick={this.changeDate} disabled={this.state.disabled}>Submit</Button>
         </Form>
           {this.state.show && <AgeStats date={this.state.fete}/> }
       </div>
     );
   }
 }
 export default FormCompo
