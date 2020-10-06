import React from "react";
import styled from "styled-components";
import southwest from "../Logo/Southwest-Airlines.png";
import cloud from "../Logo/cloud-top.svg";
import heart from "../Logo/kisspng.png";
import {
  Container,
  Box,
  Header,
  HeaderText,
  ContainerSchedule,
  ContainerTable,
  LeftTime,
  RightTime,
  Airport,
  Time,
  AirlinesLogo,
  Cloud,
  WhiteBox,
  Heart,
  Favoriteflight,
  FavoriteflightSubtitle,
  Number,
  FooterContainerSchedule
} from "./styles";

const Icon = styled.i.attrs(props => ({
  className: `${props.pack} fa-${props.icon}`
}))`
  color: ${({ color }) => color};
`;

const Test = props => {
  const items = [
    {
      departureCountry: "ALB",
      arrivalCountry: "MDW",
      departureTime: "Albany, NY (5:15am)",
      arrivalTime: "Chicago, IL (6:35am)",
      icon: "plane",
      color: "#25ACFE",
      airlines: southwest,
      number: "#6541"
    },
    {
      departureCountry: "CVG",
      arrivalCountry: "YVR",
      departureTime: "Cincinnati, NY (5:36am)",
      arrivalTime: "Vancouver, CA (6:05am)",
      icon: "plane-arrival",
      color: "#25ACFE",
      airlines: southwest,
      number: "#2145"
    },
    {
      departureCountry: "BWI",
      arrivalCountry: "DEN",
      departureTime: "Baltimore, NY (9:44am)",
      arrivalTime: "Denver, CO (3:40pm)",
      icon: "plane-departure",
      color: "#25ACFE",
      airlines: southwest,
      number: "#3652"
    }
  ];
  return (
    <Box>
      <Container>
        <Header>
          <i className="fas fa-arrow-left"></i>
          <HeaderText>Search Results</HeaderText>
        </Header>
        {items.map(item => {
          const {
            departureCountry,
            arrivalCountry,
            departureTime,
            arrivalTime,
            icon,
            color,
            number
          } = item;
          return (
            <Item
              departureCountry={departureCountry}
              arrivalCountry={arrivalCountry}
              departureTime={departureTime}
              arrivalTime={arrivalTime}
              icon={icon}
              color={color}
              number={number}
            />
          );
        })}
        <Cloud cloud={cloud} />
        <WhiteBox>
          <Heart heart={heart} />
          <Favoriteflight>ALB to MDW</Favoriteflight>
          <FavoriteflightSubtitle>
            Today - Mon, June 20th 2020
          </FavoriteflightSubtitle>
        </WhiteBox>
      </Container>
    </Box>
  );
};

const Item = props => {
  const {
    departureCountry,
    arrivalCountry,
    departureTime,
    arrivalTime,
    icon,
    color,
    number
  } = props;
  return (
    <ContainerSchedule>
      <ContainerTable>
        <LeftTime>
          <Airport>{departureCountry}</Airport>
          <Time>{departureTime}</Time>
        </LeftTime>
        <Icon icon={icon} color={color} pack="fas" />
        <RightTime>
          <Airport>{arrivalCountry}</Airport>
          <Time>{arrivalTime}</Time>
        </RightTime>
      </ContainerTable>
      <FooterContainerSchedule>
        <AirlinesLogo airlines={southwest} />
        <Number>{number}</Number>
      </FooterContainerSchedule>
    </ContainerSchedule>
  );
};

export default Test;
