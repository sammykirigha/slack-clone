import React from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..." />
                    <File />
                    <SendButton>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
padding-left: 20px;
padding-right: 20px;
padding-bottom: 24px;
`

const InputContainer = styled.div`
border: 1px solid #8D8D8E;
border-radius: 4px;

form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 1px;
    input {
        flex:1;
        border: none;
        font-size: 13px;
    }

    input:focus {
        outline: none;
    }
}
`;

const SendButton = styled.div`
 background: #007a5a;
 border-radius: 2px;
 width: 32px;
 height: 32px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-right: 5px;
 cursor: pointer;

 .MuiSvgIcon-root {
     width: 18px;
 }

 :hover {
     background: #148567;
 }
`;

const Send = styled(SendIcon)`
color: white;
`;

const File = styled(AttachFileIcon)`
margin-right: 10px;
width: 20px;
height: 20px;
cursor: pointer;
`;

