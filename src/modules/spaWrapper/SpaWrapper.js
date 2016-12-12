import React, {Component} from 'react';
import styles from './SpaWrapper.styl';

export class SpaWrapper extends React.Component {

  // typically we define some stuff from state first, but since using cookies there is no predefined state!

  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
       <div className={styles.SpaWrapper}>
        Spa App goes here with child React components
      </div>
    );
  }
}

export default SpaWrapper
