export default function Stats({ items }) {
  if (!items.length) return <p className="stats"><em>start adding some item to your packing list</em></p>;
  const newItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / newItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "you got everything to go" :
          ` 🎒 you have ${newItems} on your list, and you already packed ${numPacked} (${percentage}%)`} </em>
    </footer>
  );
}
