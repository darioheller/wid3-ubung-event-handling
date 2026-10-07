import "./styles.css";

// const handleClick = (e) => console.log(e.target.id);

function handleClick(e) {console.log(e.target.id);}

export default function App() {
  return (
    <div className="App">
      <h1>Event Handling</h1>

      <button
        id="mein-button"
        onClick={handleClick}
        onMouseEnter={() => console.log("Maus ist im Button")}
        onMouseLeave={() => console.log("Maus hat den Button verlassen")}
      >
        Klick mich
      </button>

      <input
        type="checkbox"
        onChange={(e) => console.log(e.target.checked)}
      />

      <input
        type="text"
        onKeyDown={(e) => console.log(e.key)}
      />

    </div>
  );
}
