import React, { Component } from "react"
import styled from "styled-components"
import style from "./result.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const Row = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 40px;
  margin-left: 210px;
`

const InputResult = styled.input`
  width: 220px;
  height: 30px;
  padding: 5px 10px;
  outline: none;
  border-radius: 99px;
  border: #000;
`

const ResultStyle = styled.div`
  color: #fff;
`

const CheckMark = styled.span`
  color: rgba(80, 80, 80, 80);
  background-color: #fff;
  font-size: 0.8rem;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  border-radius: 99px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export class Result extends Component {
  render() {
    const { result, handleClick, handleChangeValue } = this.props
    return (
      <div className="result">
        <button className={style.btn} onClick={handleClick}>
          Calculate BMI
        </button>
        <Row>
          <ResultStyle>RESULT :</ResultStyle>
          <InputResult type="text" placeholder="kết quả..." value={result} onChange={handleChangeValue("result")} />
        </Row>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Thành phần Cơ thể</th>
              <th>Chỉ số khối cơ bản (BMI)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>Thiếu cân</td>
              <td>
                Dưới 18.5{" "}
                {result !== "" && result < 18.5 && (
                  <CheckMark>
                    <FontAwesomeIcon icon={faCheck} />
                  </CheckMark>
                )}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Bình thường</td>
              <td>
                18.5 - 22.9{" "}
                {result !== "" && result >= 18.5 && result <= 22.9 && (
                  <CheckMark>
                    <FontAwesomeIcon icon={faCheck} />
                  </CheckMark>
                )}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Thừa cân</td>
              <td>
                23-24.9{" "}
                {result !== "" && result >= 23 && result <= 24.9 && (
                  <CheckMark>
                    <FontAwesomeIcon icon={faCheck} />
                  </CheckMark>
                )}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Béo cân</td>
              <td>
                Trên 25{" "}
                {result !== "" && result >= 25 && (
                  <CheckMark>
                    <FontAwesomeIcon icon={faCheck} />
                  </CheckMark>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Result
