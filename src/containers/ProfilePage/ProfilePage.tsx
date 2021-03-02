import React, {useContext} from "react";

import {AuthContext} from "~/context";
import AvatarIcon from "../../assets/icons/avatar.svg";
import Points from "~/components/Points";

import {
  ProfilePageWrapper,
  TopProfile,
  ProfileCard,
  AvatarWrapper,
  Name,
  Container,
  H2,
} from "./ProfilePage.styles";

const ProfilePage = () => {
  const {isAuth, auth} = useContext(AuthContext);

  return (
    <ProfilePageWrapper>
      <Container>
        <TopProfile>
          <H2>Profile</H2>
          <ProfileCard>
            <AvatarWrapper>
              <img alt={"Profile Picture"} src={AvatarIcon} />
            </AvatarWrapper>
            <Name>{auth?.name}</Name>
            <Points isAuth={isAuth} points={auth?.points} />
          </ProfileCard>
        </TopProfile>
      </Container>
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
