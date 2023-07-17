import Link from "../components/Link";

export default function HomePage({ turnedOnLights }) {
  return (
    <div>
      <h1>Home</h1>
      <p>
        {`${turnedOnLights} ${
          turnedOnLights === 1 ? "light is" : "lights are"
        } on.`}
      </p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
