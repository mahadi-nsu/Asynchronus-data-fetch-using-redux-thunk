import React , {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {increment , fetchData} from './actions/actions';

class App extends Component{

  componentDidMount() {
    this.props.onFetchData()
  }
   render ()
   {
     return(
       <div>
         <h2>{this.props.num}</h2>
         <button onClick = {() => this.props.onIncrement(1)}>+1</button>
         <hr />
         <h1>Fetching the data from the backend</h1>
        {this.props.error && <p>{this.props.error}</p>}

        {this.props.data && <ul>
          <li>id: {this.props.data.id}</li>
          <li>title: {this.props.data.title}</li>
        </ul>}
       </div>
     )
   }
}

//state er kon jinishgula ei component k diben
const mapStateToProps = (state) =>{ 
   return {
     num : state.num,
     data : state.data,
     error : state.error
   }
}

//kon action k dispatch korben
const mapDispatchToProps = (dispatch) =>{
    return {
      onIncrement : () => dispatch(increment(1)) ,
      // onIncrement : () => dispatch(increment(2)) ,
      onFetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
