export default function ListCard({ movie, setCurrentMovie }) {
  return (
    <div style={{ width: "300px", margin: "10px" }}>
      <img
        src={movie.imageUrl}
        alt={movie.title}
        style={{ width: "200px", height: "auto" }}
      />
      <div>
        <button onClick={() => setCurrentMovie(movie)}>Watch</button>
      </div>
    </div>
  );
}
