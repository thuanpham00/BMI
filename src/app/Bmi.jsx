import React, { Component } from "react"
import styled from "styled-components"
import Input from "./Input"
import Result from "./Result"

const Container = styled.div`
  max-width: 900px;
  height: 490px;
  margin: 20px auto;
  padding: 10px;
  background-color: #182a4e;
  border-radius: 10px;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
`

export class Bmi extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weight: "",
      height: "",
      result: ""
    }
  }

  // currying - nâng cao
  handleChangeValue = (name) => (event) => {
    if (name === "weight") {
      this.setState({
        weight: event.target.value
      })
    } else if (name === "height") {
      this.setState({
        height: event.target.value
      })
    } else if (name === "result") {
      this.setState({
        result: ""
      })
    }
  }

  // currying cách viết khác
  handleClick = (weight, height) => {
    const inputWeight = Number(weight)
    const inputHeight = Number(height) / 100
    return (result) => {
      result = (inputWeight / Math.pow(inputHeight, 2)).toFixed(2).toString()
      this.setState({
        result: result
      })
    }
  }

  render() {
    const { weight, height, result } = this.state
    return (
      <Container>
        <Title>BMI Tracker</Title>
        <Input weight={weight} height={height} handleChangeValue={this.handleChangeValue} />
        <Result
          result={result}
          handleClick={this.handleClick(weight, height)}
          handleChangeValue={this.handleChangeValue}
        />
      </Container>
    )
  }
}

export default Bmi
// đầu tiên input weight và input height đều rỗng sau đó nhập liệu thì change value nên cần setState lại
// và result cũng thay đổi vì ban đầu rỗng nên cần setState

// khi click vào nó thực hiện hàm và trả ra setState mới của result
// và gán nó vào value
