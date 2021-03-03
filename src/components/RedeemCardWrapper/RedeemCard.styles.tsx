import styled from "styled-components";

export const RedeemCardWrapper = styled.div`
  min-height: 200px;
  margin: 12px 0;
  padding: 1rem 2rem;

  background: var(--white);
  border-radius: 6px;
  border: 1px solid #eeeeee;
  filter: drop-shadow(2px 2px 44px rgba(176, 176, 176, 0.05));

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Name = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Date = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 12px;
  color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Price = styled.div`
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 12px;
  color: var(--gold);
  display: flex;
`;

export const Category = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #b0b0b0;
  display: flex;
`;
export const Label = styled.p`
  margin-right: 0.5rem;
  font-weight: 600;
  font-size: 12px;
  color: #666666;
`;
