import React from 'react';
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import ForumIcon from '@material-ui/icons/Forum';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Chat() {
    return (
        <Container>
            <Header>
                <HeaderUser>
                    <Name>
                        sammy kirigha,
                    </Name>
                    <NameUserStar>
                        <StarBorderIcon />
                    </NameUserStar>
                </HeaderUser>
                <HeaderIcon>
                    <CallIcon />
                    <ForumIcon />
                </HeaderIcon>
            </Header>
            <Body>
               
            </Body>
        </Container>
    )
}

export default Chat


const Container = styled.div`
`;

const Header = styled.div`
position: sticky;
height: 64px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #d6d2d2;

`;

const HeaderIcon = styled.div`
margin-top: 20px;
width: 100px;
margin-right: 20px;
display: flex;
justify-content: space-between;
color: rgb(112, 110, 110);
cursor: pointer;

`;

const HeaderUser = styled.div`
margin-top: 20px;
margin-left: 30px;
display: flex;
align-items: center;
cursor: pointer;

`;

const Name = styled.div`

`;

const NameUserStar = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
`;

const Body = styled.div``