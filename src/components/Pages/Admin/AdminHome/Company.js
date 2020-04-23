import React from 'react';

// IMPORTS..
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { delet_user, update_user } from '../../../../store/action/index';

// SCSS..
import classes from './adminHome.module.scss';

const Company = () => {
  const company = useSelector((state) => {
    if (state && state.companyReducer && state.companyReducer.companyData) {
      let dataSource = [];
      let array = state.companyReducer.companyData ? state.companyReducer.companyData : [];

      if (array.length) {
        array.map((val, key) => {
          const { companyEmail, companyLocation, companyName, companyType } = val.company.data;
          let obj = {
            key: val.id,
            companyEmail,
            companyLocation,
            companyName,
            companyType,
          };

          dataSource.push(obj);
        });
      }
      return dataSource;
    }
  });

  const dispatch = useDispatch();
  const { Column } = Table;

  return (
    <Table className={classes.table} dataSource={company}>
      <Column title="Company Email" dataIndex="companyEmail" key="companyEmail" />
      <Column title="Company Location" dataIndex="companyLocation" key="companyLocation" />
      <Column title="Company Name" dataIndex="companyName" key="companyName" />
      <Column title="Company Type" dataIndex="companyType" key="companyType" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <span>
            <div className="table-action-btn">
              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => dispatch(update_user(text.key, 'company'))}
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => dispatch(delet_user(text.key, 'company'))}
              />
            </div>
          </span>
        )}
      />
    </Table>
  );
};

export default Company;
