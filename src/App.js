import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUsers: null
    };
  }

  //default login state for user to prevent memory leaks when App unmounts
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth;
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUsers} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
