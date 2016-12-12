import React, {Component} from 'react';
import _ from 'lodash';
import styles from './Logout.styl';

const Logout = (props) => (
   <div className={styles.Logout}>
      <button onClick={props.handleClick}>Logout</button>
   </div>
);

export default Logout
