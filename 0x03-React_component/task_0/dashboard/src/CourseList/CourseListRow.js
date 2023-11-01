// CourseList/CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (isHeader) {
    if (textSecondCell === null) {
      return <th colSpan="2">{textFirstCell}</th>;
    }
    return (
      <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </>
    );
  }

  return (
    <>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;

