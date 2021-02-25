import React from 'react';
import styled from 'styled-components';

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src=" https://randomuser.me/api/portraits/women/54.jpg" />
            </UserAvatar>
            <Messagecontent>
                <Name>
                    Flora
                     <span>2/23/2021 11:13:44 AM</span>
                </Name>
                <Text>
                   This is the best challenge
                </Text>
            </Messagecontent>
        </Container>
    )
}

export default ChatMessage


const Container = styled.div`
 padding: 8px 20px;
 display: flex;
 align-items: center;

 :hover {
     border-bottom: 1px solid blue;
     cursor: pointer;
 }

`;

const UserAvatar = styled.div`
width: 36px;
height: 36px;
border-radius: 2px;
overflow: hidden;
margin-right: 8px;

img {
    width: 100%;
}
`;

const Messagecontent = styled.div`
display: flex;
flex-direction: column;
`;

const Name = styled.span`
font-weight: 900;
font-size: 15px;
line-height: 1.4;

span {
    margin-left: 8px;
    font-weight: 400;
    font-size: 13px;
    color: rgb(97, 96, 97)
}
`;

const Text = styled.span`

`;
