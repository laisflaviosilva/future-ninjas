import React from 'react'
import styled from 'styled-components'

const ContainerFooter = styled.div`
height: 50px;
position: fixed;
bottom: 0;
background-color: #2B2D2F;
color: #FFF;
width: 100vw;
text-align: center;
font-size: 0.7em;
`

class Footer extends React.Component {
    render () {
        return (
            <ContainerFooter>
                <h2>Designed and created by Future Ninjas</h2>
            </ContainerFooter>
        )
    }
}

export default Footer