import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import CardBox from './components/CardBox'

interface State {
  numClicks: number
  isFocused: boolean
}

class MyComponent extends StreamlitComponentBase<State> {
  public state = { numClicks: 0, isFocused: false }

  public render = (): ReactNode => {

    const numero = this.props.args["numero"]
    const frase = this.props.args["frase"]
    const icono = this.props.args["icono"]
    const spin = this.props.args["spin"]


    const { theme } = this.props
    const style: React.CSSProperties = {}

    if (theme) {
      const borderStyling = `1px solid ${
        this.state.isFocused ? theme.primaryColor : "gray"
      }`
      style.border = borderStyling
      style.outline = borderStyling
    }

    return (

      <span>
      <CardBox  numero={numero} frase={frase} icono={icono}  spin={spin}/>
        {/*Hello from React, {name}! &nbsp;  
        <button
          style={style}
          onClick={this.onClicked}
          disabled={this.props.disabled}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
        >
          Click Me!
        </button>
        */}
      </span>
    )
  }

  /** Click handler for our "Click Me!" button. */
  private onClicked = (): void => {
    // Increment state.numClicks, and pass the new value back to
    // Streamlit via `Streamlit.setComponentValue`.
    this.setState(
      prevState => ({ numClicks: prevState.numClicks + 3 }),
      () => Streamlit.setComponentValue(this.state.numClicks)
    )
  }

  /** Focus handler for our "Click Me!" button. */
  private _onFocus = (): void => {
    this.setState({ isFocused: true })
  }

  /** Blur handler for our "Click Me!" button. */
  private _onBlur = (): void => {
    this.setState({ isFocused: false })
  }
}


export default withStreamlitConnection(MyComponent)
