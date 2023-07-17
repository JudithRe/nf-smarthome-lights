import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleTurnOffAll,
  handleTurnOnAll,
  turnedOnLights,
  lights,
}) {
  return (
    <>
      <p>{`${turnedOnLights} ${
        turnedOnLights === 1 ? "light is" : "lights are"
      } on.`}</p>
      <StyledQuickActions>
        <Button
          type="button"
          onClick={() => {
            handleTurnOffAll();
          }}
          disabled={turnedOnLights === 0 ? true : false}
        >
          Turn all lights off
        </Button>
        <Button
          type="button"
          onClick={() => {
            handleTurnOnAll();
          }}
          disabled={turnedOnLights === lights.length ? true : false}
        >
          Turn all lights on
        </Button>
      </StyledQuickActions>
    </>
  );
}
