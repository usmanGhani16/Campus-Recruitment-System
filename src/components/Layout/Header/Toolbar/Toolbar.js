import React, { useState } from 'react';

// IMPORTS...
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { singout } from '../../../../store/action/index';

// SCSS...
import classes from '../header.module.scss';

const Toolbar = () => {
  const user = useSelector((state) => state.authReducer.currnetuser);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    history.push('/login');
    return dispatch(singout());
  };

  return (
    <div className={classes.Toolbar}>
      <Container className={classes.toolbarContainer}>
        <Row className={classes.toolbarRow}>
          <Col md={6} className={classes.toolbarCol}>
            <div className={classes.toolbarLeft}>
              <div className={classes.welcomeMessage}>
                <FontAwesomeIcon icon={faUniversity} />
                <span>Welcome to CR System</span>
              </div>
            </div>
          </Col>
          <Col md={6} className={classes.toolbarCol}>
            <div className={classes.toolbarRight}>
              <div className={classes.toolbarShareIcon}>
                <ul>
                  {user ? (
                    <li>
                      <div onClick={signOut} className={classes.applyBtn}>
                        Logout
                      </div>
                    </li>
                  ) : (
                    <li>
                      <Link to="/register" className={classes.applyBtn}>
                        Register
                      </Link>
                      <Link to="/login" className={classes.applyBtn}>
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Toolbar;
