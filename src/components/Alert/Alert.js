import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Alerts.module.scss';

// { msg, title, type, timer }
const Alerts = ({ alerts }) => {
  return (
    <>
      {alerts && alerts.length > 0 && (
        <div className={styles.alerts}>
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={[styles.alert, styles[alert.type]].join(' ')}
            >
              <div className={styles.alertTitle}>{alert.title}</div>
              <div className={styles.alertMessage}>{alert.msg}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

Alerts.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});
export default connect(mapStateToProps, null)(Alerts);
