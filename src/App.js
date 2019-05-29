import React,{Component} from 'react';
import data from  './data.json';
import './App.css';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configure.store';
import {BrowserRouter,Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

 const mapStateToProps = state => {
          return {
              Main: state.main,
              Form:state.form,
              poductData:state.Data
          }
  }

class  App extends Component {
 constructor(props){
            super(props);
 }

  render(){

            return (
                    <div className="App">
                      
                            <BrowserRouter>
                                  <Switch>
                                      <Route exact path="/" component={this.props.Main} />
                                      <Route  path="/edit-product" component={this.props.Form}/>
                                      <Redirect  to="/" />
                                  </Switch>
                            </BrowserRouter>
                      
                    </div>
            );
  }
}

export default (connect(mapStateToProps)(App));
