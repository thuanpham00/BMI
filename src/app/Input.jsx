import React, { Component } from "react"
import style from "./input.module.scss"
export class Input extends Component {
  render() {
    const { weight, height, handleChangeValue } = this.props
    return (
      <div className="calculate">
        <div className={style.row}>
          <div>
            <div className={style.text}>Weight (in kg)</div>
            <input
              type="text"
              placeholder="50"
              className={style.input}
              value={weight}
              onChange={handleChangeValue("weight")}
            />
          </div>
          <div>
            <div className={style.text}>Height (in cm)</div>
            <input
              type="text"
              placeholder="150"
              className={style.input}
              value={height}
              onChange={handleChangeValue("height")}
            />
          </div>
        </div>
      </div>
    )
  }
}
// vì đầu tiên nó rỗng nên cần onChange lại và onChange thì setState lại vì ban đầu state rỗng và gán vào value
export default Input
