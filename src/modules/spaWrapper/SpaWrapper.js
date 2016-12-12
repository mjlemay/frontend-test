import React, {Component} from 'react';
import styles from './SpaWrapper.styl';
import LoginModule from '../loginModule/Login.js';
import LogoutModule from '../logoutModule/Logout.js';
import request from 'superagent';

export class SpaWrapper extends React.Component {

// typically we define some stuff from state first, but since using cookies there is no predefined state!

constructor (props) {
  super(props);

  this.state = {};
  this.state.loggedIn = false;

  // If it isn't a prop pass in, itds actually best NOT to be defined as a state. In this case we add it as a value to the constructor.
  this.title = 'Frontend Test';
}

  // The concept behind this spa app is that all smart functions occur at the wrapper module level. Any module pulled in has no smarts and only responds to props pass into it.

  login () {
    const self = this;
    let person = {};
    person.user = document.getElementsByTagName('input')[0].value || '';
    person.password = document.getElementsByTagName('input')[1].value || '';

    request
      .post('/login')
      .set('Content-Type', 'application/json')
      .send(person)
      .end(function(err, res){
        if (err || !res.ok) {
          console.log('Oh no! error');
        } else {
          console.log('Login Sucessful');
          self.setState({loggedIn: true});
        }
      }
    );
  }

  logout () {
    const self = this;

    request
      .get('/logout')
      .end(function(err, res){
        if (err || !res.ok) {
          console.log('Oh no! error');
        } else {
          console.log('Logout Sucessful');
          self.setState({loggedIn: false});
        }
      }
    );
  }

  render () {
    return (
      <div className={styles.SpaWrapper}>
       {this.state.loggedIn ?
          <LogoutModule
          handleClick={::this.logout} />
          :
          <LoginModule
           label={this.title}
           handleClick={::this.login} />
        }
      </div>
    );
  }
}

export default SpaWrapper
