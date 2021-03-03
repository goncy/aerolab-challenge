import React, {useContext, useEffect, useState, useRef} from "react";
import dayjs from "dayjs";

import {AuthContext} from "~/context";
import AvatarIcon from "../../assets/icons/avatar.svg";
import Points from "~/components/Points";
import api from "~/api";
import Table from "~/components/Table/Table";
import {History} from "../../types";
import NotificationHub from "~/components/Notification";
import Loading from "~/components/Loading/Loading";

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
  PointsContainer,
} from "./ProfilePage.styles";

const ProfilePage: React.FC = () => {
  const [{isAuth, auth}, setAuthContext] = useContext(AuthContext);
  const [rows, setRows] = useState<History[]>([]);
  const [status, setStatus] = useState<string>("pending");
  const [loading, setLoading] = useState<boolean>(false);
  const message = useRef(null);

  useEffect(() => {
    api
      .getHistory()
      .then((res) => {
        const rowsData: History[] = res.data.reverse().map((r) => ({
          _id: r._id + r.createDate,
          name: r.name,
          cost: r.cost,
          category: r.category,
          createDate: dayjs(r.createDate).format("MMMM DD, YYYY h:mm A"),
        }));

        setRows([...rowsData]);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("failed");
      });
  }, []);

  const addPoints = async (amount: number) => {
    if (loading) return;
    setLoading(true);
    api
      .addPoints(amount)
      .then((res) => {
        setAuthContext({isAuth, auth: {...auth, points: res.data["New Points"]}});
        message.current(`You got it ${amount} points!`);
        setLoading(false);
      })
      .catch((err) => {
        message.current("Ops! Somthing went wrong.");
        setLoading(false);
      });
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
            <PointsContainer>
              <Points isAuth={isAuth} points={auth?.points} />
            </PointsContainer>
          </ProfileCard>
          <H4>Get Coins</H4>
          <PointsCards>
            <PointsCard type1 onClick={() => addPoints(7500)}>
              {loading ? <Loading /> : <H3>GET 7500 COINS</H3>}
            </PointsCard>
            <PointsCard type2 onClick={() => addPoints(5000)}>
              {loading ? <Loading /> : <H3>GET 5000 COINS</H3>}
            </PointsCard>
            <PointsCard type3 onClick={() => addPoints(1000)}>
              {loading ? <Loading /> : <H3>GET 1000 COINS</H3>}
            </PointsCard>
          </PointsCards>
        </TopProfile>
      </Container>
      <Container>
        <H4>Redeem History</H4>
        <Table columns={columns} loading={status === "pending"} rows={rows} />
      </Container>
      <NotificationHub children={(add) => (message.current = add)} />
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
