import styled from 'styled-components'


const HeadingStyle = styled.h1`
    color: red;
`

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const DivStyle = styled.div`
        display: flex;
        margin-left: 10px;
        justify-content: space-around;
        height: 100px;
        width: 500px;
        border: 1px solid #000;
        border-radius: 12px;

        .img-wrapper img{
            width: 100px;
            height: 100px;
        }

        .text-wrapper {
            display: flex;
            gap: 10px;
            align-items: center;
        }
    

`
export const Button = styled.button`
    padding: 10px 15px;
    border: none;
    background-color: lightgreen;
    border-radius: 12px;
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;
    background-color: lightblue;

    img {
        width: 60px;
        height: 60px;
    }

    span {
        position: relative;
        top: -30px;
        right: 10px;
        background-color: #f73548;
        border-radius: 30px;
        text-align: center;
        color: white;
        padding: 2px;
    }
`

export { HeadingStyle, DivStyle }