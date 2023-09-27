import React from 'react';
import styled from "styled-components";

type ButtonPropsType = {
    color?: string
    text?: string
    border?: string

}

export const Card = () => {
    return (
        <div>
            <Wrapper>
                <Image/>
                <HeadLine>Headline</HeadLine>
                <Text>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.
                </Text>
                <Button>See more</Button>
                <Button2 color={'#FFF'}
                         text={'#4E71FE'}
                         border={'#4E71FE'}
                >Save</Button2>

            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
  margin: 150px 0 0 500px;
  width: 18.75rem;
  height: 21.875rem;
  border-radius: 0.9375rem;
  background: #FFF;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
`
const Image = styled.img`
  width: 17.5rem;
  height: 10.625rem;
  margin: 0.62rem 0.62rem 0 0.62rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  box-sizing: border-box;
  background: url('https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1696204800&Signature=PUtNxzTb0Q3lsdUXg9u380us7fJfsR0jE4aWlxJCbtK2sPzFxZKRz7pag-LmBTjj51mq4wIPMCyTVCS-rqhwY5MLMLHK-yb8K90Njp-OirAUj4bOjF4LPDdKlly2HRzleix4yV2lYZUyGFQBdHRRGYvIoxru2ol5lRv-a~izmiMMq~H2gfIKkinYWwyBFdGX9hIIlRSraKx0NYnogKc01TnBOU5rACf0Yb5rtK8RnnsbY0oplO21Y5RFlbrMCLqfehzmZ27KWJREi3RxlR~PEvCqjC8cXBG~4kSvUugCtx03pFqGn1-VABjoSPtHbjLOFWpheKQjK5c73FBZM4OYHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
`
const HeadLine = styled.h3`
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 4.38rem;
  height: 1.19rem;
  margin: 1.25rem 0 0 1.2rem;
`
const Text = styled.div`
  color: #ABB3BA;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  width: 16.25rem;
  height: 2.5rem;
  margin: 1.25rem 0 0 1.25rem;
`
const Button = styled.button`
  width: 5.375rem;
  height: 1.875rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #4E71FE;
  color: #FFF;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem; /* 200% */
  box-shadow: none;
  margin: 1.19rem 0 0 2.5rem;
`
const Button2 = styled(Button)<ButtonPropsType>`
background-color: ${props => props.color};
  color: ${props => props.text};
  border:2px solid ${props => props.border}; 
  margin-left: 0.75rem;
`