import React from 'react';
import {
  RefreshIcon,
  CurrentTime,
  AmericanUnits,
  SunriseDisplay
} from '@tbiegner99/home-automation-components';
import styles from './menuHeader.css';
import WeatherDisplay from '../components/WeatherStatus';

const MenuHeader = (props) => (
  <div className={styles.menuHeader} onClick={props.onClick}>
    <RefreshIcon onClick={() => window.location.reload()} className={styles.refreshButton} />
    <CurrentTime format="dddd MMMM D YYYY" />
    <div className={styles.status}>
      <WeatherDisplay />
      <CurrentTime format="hh:mma" />
      <SunriseDisplay units={AmericanUnits} />
    </div>
  </div>
);

export default MenuHeader;
