import React, {useContext, useEffect, useState} from "react";
import dayjs from "dayjs";

import {AuthContext} from "~/context";
import AvatarIcon from "../../assets/icons/avatar.svg";
import Points from "~/components/Points";
import api from "~/api";
import Table from "~/components/Table/Table";
import {History} from "../../types";

import {
  ProfilePageWrapper,
  TopProfile,
  ProfileCard,
  AvatarWrapper,
  Name,
  Container,
  H2,
  H3,
  H4,
  PointsCards,
  PointsCard,
} from "./ProfilePage.styles";

const ProfilePage: React.FC = () => {
  const [{isAuth, auth}, setAuthContext] = useContext(AuthContext);
  const [rows, setRows] = useState<History[]>([]);

  useEffect(() => {
    api.getHistory().then((res) => {
      const rowsData: History[] = res.data.map((r) => ({
        _id: r._id,
        name: r.name,
        cost: r.cost,
        category: r.category,
        createDate: dayjs(r.createDate).format("MMM D, YYYY h:mm A"),
      }));

      setRows([...rowsData]);
    });
  }, []);

  const addPoints = async (amount: number) => {
    const res = await api.addPoints(amount);

    setAuthContext({isAuth, auth: {...auth, points: res.data["New Points"]}});
  };

  const columns = ["NAME", "COST", "CATEGORY", "DATE"];

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
      <Container>
        <H4>Redeem History</H4>
        <Table columns={columns} rows={rows} />
      </Container>
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
