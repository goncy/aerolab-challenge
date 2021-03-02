import React, {useContext} from "react";

import {AuthContext} from "~/context";
import AvatarIcon from "../../assets/icons/avatar.svg";
import Points from "~/components/Points";
import api from "~/api";

import {
  ProfilePageWrapper,
  TopProfile,
  ProfileCard,
  AvatarWrapper,
  Name,
  Container,
  H2,
  H3,
  PointsCards,
  PointsCard,
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const [{isAuth, auth}, setAuthContext] = useContext(AuthContext);

  const addPoints = async (amount: number) => {
    const res = await api.addPoints(amount);

    setAuthContext({isAuth, auth: {...auth, points: res.data["New Points"]}});
  };

  return (
    <ProfilePageWrapper>
      <Container>
        <H2>Profile</H2>
        <TopProfile>
          <ProfileCard>
            <AvatarWrapper>
              <img alt={"Profile Picture"} src={AvatarIcon} />
            </AvatarWrapper>
            <Name>{auth?.name}</Name>
            <Points isAuth={isAuth} points={auth?.points} />
          </ProfileCard>
          <PointsCards>
            <PointsCard type1 onClick={() => addPoints(7500)}>
              <H3>GET 7500 COINS</H3>
            </PointsCard>
            <PointsCard type2 onClick={() => addPoints(5000)}>
              <H3>GET 5000 COINS</H3>
            </PointsCard>
            <PointsCard type3 onClick={() => addPoints(1000)}>
              <H3>GET 1000 COINS</H3>
            </PointsCard>
          </PointsCards>
        </TopProfile>
      </Container>
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
