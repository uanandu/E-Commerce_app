import styled from "styled-components"

export const ErrorPage = () => {
    return (
        <ErrorDiv>
            <ErrorImage src="https://media.giphy.com/media/ugtTrUr2ydZrcPgsAx/giphy.gif" />
            <ErrorText>Oops.. </ErrorText>
            <ErrorText>This is not the page you are looking for!</ErrorText>
        </ErrorDiv>
    )
}

const ErrorDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ErrorImage = styled.img``

const ErrorText = styled.h1`
    font-family: var(--quaternary-font-family);
`