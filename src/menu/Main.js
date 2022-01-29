import React from 'react';
import combineClasses from 'classnames';
import MenuCard from './MenuCard';
import styles from './main.css';
import MenuHeader from './MenuHeader';

const PAGE_SIZE = 6;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuPage: 0 };
  }

  renderMenuPage(apps) {
    const route = (app) => {
      window.history.pushState({}, '', app.routes.routes);
    };
    const cards = apps.map((app) => (
      <div className={styles.appCard}>
        <MenuCard onClick={() => route(app)} className={styles.card} title={<b>{app.title}</b>} >
          {app.icon && <img alt="" className={styles.icon} src={`/icons/${app.name}/${app.icon}`} />}
        </MenuCard>
      </div>
    ));
    return <div className={styles.appsPage}>{cards}</div>;
  }

  renderMenuItems() {
    const { apps } = this.props;
    const results = [];
    for (let startIndex = 0; startIndex < apps.length; startIndex += PAGE_SIZE) {
      const endIndex = startIndex + PAGE_SIZE;
      const pageApps = apps.slice(startIndex, endIndex);
      results.push(this.renderMenuPage(pageApps));
    }
    return results;
  }

  renderLastArrow(page) {
    const hide = page === 0;
    const onClick = () => this.setState({ menuPage: page - 1 });

    return (
      <div className={styles.arrow} onClick={!hide ? onClick : null}>
        <div className={combineClasses({ [styles.hide]: hide })}>L</div>
      </div>
    );
  }

  renderNextArrow(page, pagesLength) {
    const hide = page === pagesLength - 1;
    const onClick = () => this.setState({ menuPage: page + 1 });
    return (
      <div className={styles.arrow} onClick={!hide ? onClick : null}>
        <div className={combineClasses({ [styles.hide]: hide })}>N</div>
      </div>
    );
  }

  render() {
    const { menuPage } = this.state;
    const pages = this.renderMenuItems(menuPage);
    return (
      <main className={styles.mainMenu}>
        <section className={styles.headerSection}>
          <MenuHeader />
        </section>
        <section className={styles.appsMenu}>
          {this.renderLastArrow(menuPage)}
          <section className={styles.menuContent}>
            <div
              style={{ width: `${pages.length * 100}vw`, left: `${menuPage * -100}vw` }}
              className={styles.appsPagesContainer}
            >
              {pages}
            </div>
          </section>
          {this.renderNextArrow(menuPage, pages.length)}
        </section>
      </main>
    );
  }
}

export default Main;
