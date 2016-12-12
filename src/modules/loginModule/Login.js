import React, {Component} from 'react';
import _ from 'lodash';
import styles from './Login.styl';

const Login = (props) => (
   <div className={styles.Login}>
      <h1>{_.get(props, 'label')}</h1>
      <div>
        <input placeholder={'Username'} />
        <input placeholder={'Password'} />
        <button onClick={props.handleClick}>Login</button>
      </div>
   </div>
);

Login.defaultProps = {
  label: ''
};

Login.propTypes = {
  label: React.PropTypes.string,
  handleClick: React.PropTypes.funct
};

export default Login
