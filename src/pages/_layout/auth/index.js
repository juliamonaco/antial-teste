import React from 'react'

const Default = ({ children }) => {
  return(
    <div
      style={{
        display: "flex",
        flex: 1,
        minHeight: "100%"
      }}
    >
      {children}
    </div>
  )
}

export default Default
