import React, { Component } from "react";
import ProdList from "./components/prodList";
import EachProduct from './components/EachProduct/eachProduct'
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class App extends Component {
  state = {
    prodList: []
  };
  componentDidMount() {
    fetch("https://cc-mock-api.herokuapp.com/product/")
      .then(res => res.json()
     
      
      )
      .then(data => {
        console.log('data : ' , data.list);
        
        this.setState({ prodList: data.list });
      })
      .catch(console.log);
  }
  render() {
    const IndexPage = () => {
      return <ProdList prodList={this.state.prodList}/>;
    };
    return (
      <div className="card">
        <div className="card-body">
          <center>
            <h1>Product List</h1>
          </center>
          <Router>
            <Link to="/">Home</Link>
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/product/:id" component={EachProduct} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}


export default App;
