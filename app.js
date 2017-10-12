import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`font-weight: bold;`

class App extends React.Component {
  render() {
    return <Title>My App</Title>
  }
}

global.App = App
