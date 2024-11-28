import styled from "styled-components";

const Box = styled.div`
    display: flex;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    max-width: 60%;
    height: fit-content;
    line-height: 1.26em;
    border-radius: 10px;
    overflow-wrap: break-word;
    background-color: rgb(245, 120, 11);

    &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        right: 20px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid rgb(245, 120, 11);
    }
`;

export const SendedMessage = ({ message }: { message: string }) => {
    return (
        <Box>
            {message}
        </Box>
    );
}