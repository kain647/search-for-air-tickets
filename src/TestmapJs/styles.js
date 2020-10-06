import styled from "styled-components";

export const Box = styled.div`
  display: flex;
`;
export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 670px;
  width: 375px;
  background-color: #2393ff;
  border-radius: 10px 10px 0px 0px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  width: 325px;
  margin-bottom: 40px;
  margin-top: 40px;
  i {
    cursor: pointer;
  }
`;
export const HeaderText = styled.div`
  display: flex;
`;
export const ContainerSchedule = styled.div`
  display: flex;
  height: 145px;
  width: 325px;
  overflow: hidden;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const ContainerTable = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 3px 0px rgba(209, 209, 209, 1);
`;
export const LeftTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 85px;
  width: 85px;
  margin-left: 10px;
`;
export const RightTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 85px;
  width: 85px;
  margin-right: 10px;
`;
export const Airport = styled.div`
  display: flex;
  font-weight: bold;
  color: #51555d;
`;
export const Time = styled.div`
  display: flex;
  color: #dbdee3;
`;

export const AirlinesLogo = styled.div`
  display: flex;
  height: 50px;
  width: 80px;
  margin-left: 20px;
  margin-bottom: 10px;
  background-size: cover;
  background-image: ${({ airlines }) => `url(${airlines})`};
`;
export const Cloud = styled.img.attrs(props => ({
  src: props.cloud
}))`
  display: flex;
  position: absolute;
  top: 389px;
  height: auto;
  width: 100%;
`;
export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 545px;
  width: 100%;
  height: 150px;
  background-color: #fff;
`;
export const Heart = styled.img.attrs(props => ({
  src: props.heart
}))`
  display: flex;
  height: 70px;
  width: auto;
`;
export const Favoriteflight = styled.div`
  display: flex;
  margin-bottom: 5px;
  font-weight: bold;
  color: #51555d;
`;
export const FavoriteflightSubtitle = styled.div`
  display: flex;
  font-size: 0.7em;
  color: lightgray;
`;
export const Number = styled.div`
  display: flex;
  margin-right: 10px;
  font-weight: bold;
  color: #51555d;
`;
export const FooterContainerSchedule = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
