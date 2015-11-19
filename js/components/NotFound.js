import React from "react"

export default React.createClass ({
  render () {
    return (
      <div>
      Not Found Page
      { this.props.children }
      </div>
    )
  }
})
