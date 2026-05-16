function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  function handleDonate() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => {
      onDeleteToy(toy.id);
    });
  }

  function handleLike() {
    const updatedLikes = toy.likes + 1;

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then((r) => r.json())
      .then((updatedToy) => {
        onLikeToy(updatedToy);
      });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDonate}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;