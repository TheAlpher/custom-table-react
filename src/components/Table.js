import React from 'react';
import PropTypes from "prop-types";
import  {Cell}  from "./Cell.js";
import "../styles.css";
export const CustomTable = (props) => {
  const {
    rows,
    columns,
    editable,
    data,
    tableWidth,
    headers,
    columnsWidth,
    tHeadStyles,
    onChange,
    ...rest
  } = props;

  const tableBody = () => {
    return [...Array(headers.length ? rows - 1 : rows)].map((_, rowIndex) => (
      <tr className="table_body__row" key={rowIndex}>
        {[...Array(headers.length ? headers.length : columns)].map(
          (_, columnIndex) => (
            <Cell
              onChange={onChange}
              key={columnIndex}
              data={data?.[rowIndex]?.[columnIndex]}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              editable={editable}
            />
          )
        )}
      </tr>
    ));
  };

  return (
    <table {...rest}>
      {columnsWidth.length ? (
        <colgroup>
          {headers.length
            ? headers.map((_, headerIndex) => (
                <col
                  key={headerIndex}
                  span="1"
                  style={{
                    width: columnsWidth[headerIndex] + "%",
                  }}
                ></col>
              ))
            : [...Array(columns)].map((_, i) => (
                <col
                  key={i}
                  span="1"
                  style={{ width: columnsWidth[i] + "%" }}
                ></col>
              ))}
        </colgroup>
      ) : (
        <></>
      )}
      {headers.length ? (
        <thead className="table_head" >
          <tr className="table_head__row">
            {headers.map((headerVal, index) => (
              <th key={index} style={tHeadStyles}>{headerVal}</th>
            ))}
          </tr>
        </thead>
      ):<></>}
      <tbody className="table_body">{tableBody()}</tbody>
    </table>
  );
};

CustomTable.propTypes = {
  rows: PropTypes.number.isRequired,
  tHeadStyles: PropTypes.objectOf(PropTypes.any),
  columns: PropTypes.number.isRequired,
  editable: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.any),
  headers: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  columnsWidth: PropTypes.arrayOf(PropTypes.number),
};

CustomTable.defaultProps = {
  rows: 2,
  columns: 2,
  data: [],
  editable: false,
  headers: [],
  columnsWidth: [],
  tHeadStyles: null,
};
