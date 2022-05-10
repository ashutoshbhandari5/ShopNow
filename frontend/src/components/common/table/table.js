import React from 'react'
import style from './table.module.css'

const table = ({tableHeading,tableData}) => {
    return (
        <div className={classes.table}>
            <h2 className={classes.user__header}>USERS</h2>
            <table className={classes.user__table}>
              <thead>
                <tr>
                {tableHeading.map((el,i)=><th key={i}>{el}</th>)}
                </tr>
              </thead>
              <tbody>
                {tableData.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td>{el._id}</td>
                      <td>{el.name}</td>
                     {el.email && <td>{el.email}</td>}
                     {el.photo && <td>{el.photo}</td>}
                      <td style={{ color: el.isAdmin ? "green" : "red" }}>
                        {el.isAdmin ? "Yes" : "No"}
                      </td>
                      <td>
                        <div className={classes.edit__btn}>
                          <i
                            onClick={onEditHandler}
                            style={{ cursor: "pointer" }}
                            className="fas fa-edit"
                          ></i>
                        </div>
                        <div className={classes.delete__btn}>
                          <i
                            onClick={onDeleteHandler}
                            style={{ cursor: "pointer" }}
                            className="far fa-trash-alt"
                          ></i>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
    )
}

export default table
