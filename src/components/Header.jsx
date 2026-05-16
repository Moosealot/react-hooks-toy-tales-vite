function Header({ showForm, onClickToggleForm }) {
  return (
    <div id="toy-header">
      <img
        alt="toy header"
        src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
      />
      <button onClick={onClickToggleForm}>Add a Toy</button>
    </div>
  );
}

export default Header;