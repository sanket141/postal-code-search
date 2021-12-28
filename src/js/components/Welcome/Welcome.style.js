import styled from 'styled-components';

const WelcomeWrapper = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background-color: #ffffff;
    padding: 2vw 3vw;
    border-radius: 1vw;
`;

const Header = styled.div`
    font-family: PoppinsBold, Calibri, sans-serif;
    text-align: center;
    font-size: 2.8vw;
`;

const UnorderedList = styled.ul`
    font-family: PoppinsRegular, Calibri, sans-serif;
    line-height: 3vw;
    font-size: 1.5vw;
    padding: 0 2vw;
`;

const StartButton = styled.button`
    line-height: 3.5vw;
    padding: 0 2vw;
    box-shadow: 0 6px 9px 0 rgb(0 0 0 / 16%);
    border: 0.1vw solid #fff;
    border-radius: 1vw;
    color: #fff;
    background-color: rgba(222, 40, 50, 0.95);
    outline-color: #fff;
    font-size: 1.5vw;
    font-family: PoppinsBold, Calibri, sans-serif;
    transform: translateX(-50%);
    margin-left: 50%;
    margin-top: 1vw;
    cursor: pointer;
`;

export {
    WelcomeWrapper,
    Header,
    UnorderedList,
    StartButton,
};
