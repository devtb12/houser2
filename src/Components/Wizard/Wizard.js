import React from 'react';
import { Link } from 'react-router-dom';
import store, { 
    UPDATE_NAME,
    UPDATE_ADDRESS,
    UPDATE_CITY,
    UPDATE_STATE,
    UPDATE_ZIPCODE
} from './../../store'


class Wizard extends React.Component {
	constructor(props) {
        super (props)
        
        const reduxState = store.getState()
        this.state = {
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zipcode: reduxState.zipcode
        };
      }
      handleNameChange(nameVal) {
        this.setState({
          name: nameVal
        });
      }

      handleAddressChange(addressVal) {
        this.setState({
          address: addressVal
        });
      }

      handleCityChange(cityVal) {
        this.setState({
          city: cityVal
        });
      }

      handleStateChange(stateVal) {
        this.setState({
          state: stateVal
        });
      }

      handleZipcodeChange(zipcodeVal) {
        this.setState({
          zipcode: zipcodeVal
        });
      }



      saveChanges() {
        store.dispatch({
          type: UPDATE_NAME,
          payload: this.state.name
        })

        store.dispatch({
          type: UPDATE_ADDRESS,
          payload: this.state.address
        })

        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
          })

        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
          })

        store.dispatch({
            type: UPDATE_ZIPCODE,
            payload: this.state.zipcode
          })

      }






	
	render() {
		return (
			<div>
				<ul>
				<li><h1>Add New Listing</h1></li>
                <li>Property name</li>
                <li><input value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} type="text" placeholder="Property Name"/></li>
                <li>Address</li>
                <li><input value={this.state.address} onChange={e => this.handleAddressChange(e.target.value)} type="text" placeholder="Address"/></li>
                <li>City</li>
                <li><input value={this.state.city} onChange={e => this.handleCityChange(e.target.value)} type="text" placeholder="City"/></li>
                <li>State</li>
                <li><input value={this.state.state} onChange={e => this.handleStateChange(e.target.value)} type="text" placeholder="State"/></li>
                <li>Zip Code</li>
                <li><input value={this.state.zipcode} onChange={e => this.handleZipcodeChange(e.target.value)} type="text" placeholder="Zip Code"/></li>

				<li><Link to="/"><button onClick={() => this.saveChanges()}>Complete</button></Link>
                    <button><Link to="/">Cancel</Link></button></li>
					
				</ul>
			</div>
		);
	}
}

export default Wizard;
