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
    <div className={styles.headerRow}>
      <RefreshIcon onClick={() => window.location.reload()} className={styles.refreshButton} />
      <WeatherDisplay />
    </div>
    <div className={styles.headerRow}>
      <CurrentTime format="dddd MMMM D YYYY" />
      <CurrentTime format="hh:mma" />
    </div>
    <div className={styles.headerRow}>
      <SunriseDisplay className={styles.sunrise} units={AmericanUnits} />
    </div>
  </div>
);

export default MenuHeader;
