import styled from 'styled-components';

const Window = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 15%;
    top: 50%;
    background-color: #ffffff;
    padding: 1vw 2vw;
    border-radius: 1vw;
    box-shadow: 0 6px 9px 0 rgb(0 0 0 / 16%);
    border: 0.1vw solid #fff;
`;

const SearchInput = styled.input`
    font-family: PoppinsRegular, Calibri, sans-serif;
    line-height: 3vw;
    font-size: 1.5vw;
    padding: 0 1vw;
`;

const UnorderedList = styled.ul`
    height: 40vh;
    font-family: PoppinsRegular, Calibri, sans-serif;
    line-height: 3vw;
    font-size: 1.5vw;
    padding: 0 2vw;
    overflow-y: auto;

    ::-webkit-scrollbar-track {
        background-color: #00000066;
        background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #000000;
        width: 0.58vw;
    }

    ::-webkit-scrollbar {
        width: 0.7vw;
    }
`;

const List = styled.li`
    display: ${props => props.display};
    cursor: pointer;
`;

const Instruction = styled.div`
    font-family: PoppinsRegular, Calibri, sans-serif;
    margin-top: 2vw;
    font-size: 1vw;
    text-align: center;
`;

export {
    Window,
    SearchInput,
    UnorderedList,
    List,
    Instruction,
};
