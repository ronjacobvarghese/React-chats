import { useSelector } from "react-redux";

function ExitPage() {
  const name = useSelector((state) => state.chats.name);
  const age = useSelector((state) => state.chats.age);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        color: "var(--primary-color)",
      }}
    >
      <header>
        <h1>Thank You</h1>
      </header>
      <main>
        <h1>
          {" "}
          Your name {name} aged {age} has been added to student system
        </h1>
        <h3>You may proceed to exit.</h3>
      </main>
    </div>
  );
}

export default ExitPage;
