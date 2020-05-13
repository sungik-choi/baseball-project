import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "style/Background";
import logo from "assets/logo.svg";
import Button from "style/Button";
import { useBaseballState, useBaseballDispatch } from "context/context";

import ScoreBoard from "./ScoreBoard";
import CurrentPlayer from "./CurrentPlayer";
import GameArea from "./GameArea";
import StatsCenter from "./StatsCenter";

const PlayGround = () => {
  const { playGround } = useBaseballState();
  const defenseTeam = playGround.defenseTeam;
  const attackTeam = playGround.attackTeam;
  const currentAttackTeamBatterList = defenseTeam.batter !== null ? defenseTeam.batter : attackTeam.batter;

  return (
    <PlayGroundWrap color="#333746">
      <Logo>
        <LogoSvg type="image/svg+xml" data={logo}></LogoSvg>
      </Logo>
      <ScoreBoard displays={playGround.displays} />
      <CurrentPlayer defenseTeam={defenseTeam} attackTeam={attackTeam} />
      <GameArea defenseTeam={defenseTeam} attackTeam={attackTeam} ballCount={playGround.ballCount} />
      <StatsCenter batterList={currentAttackTeamBatterList} />
      <PlayerListButton as={Link} to="/playerlist">
        선수 목록
      </PlayerListButton>
    </PlayGroundWrap>
  );
};

const PlayGroundWrap = styled(Background)`
  display: grid;
  grid-template-columns: var(--grid-template-columns);
  grid-template-rows: var(--grid-template-rows);
  grid-gap: 1rem;
  padding: 1.5rem;
  grid-template-areas: var(--grid-template-areas);
  * {
    box-sizing: border-box;
  }
`;

const Logo = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoSvg = styled.object`
  grid-area: logo;
  width: 85%;
  height: 85%;
`;

const PlayerListButton = styled(Button)`
  grid-area: playerListButton;
  width: 100%;
  height: 80%;
`;

export default PlayGround;

// <Link to="/playerlist">선수 명단</Link>
//<Header>
// <LogoSvg type="image/svg+xml" data={logo}></LogoSvg>
//   <ScoreBoard />
//     <CurrentPlayer />
//     </Header>