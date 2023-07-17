import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleTurnOffAll,
  handleTurnOnAll,
  turnedOnLights,
  lights,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleTurnOffAll={handleTurnOffAll}
        handleTurnOnAll={handleTurnOnAll}
        turnedOnLights={turnedOnLights}
        lights={lights}
      />
    </>
  );
}
