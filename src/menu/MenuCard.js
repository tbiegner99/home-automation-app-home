import combineClasses from 'classnames';
import React from 'react';
import styles from './menuCard.css';

const MenuCard = (props) => (
  <div className={combineClasses(styles.menuCard, props.className)} onClick={props.onClick}>
    <div className={styles.icon}>{props.children}</div>
    <div className={styles.title}>{props.title}</div>
  </div>
);

export default MenuCard;
