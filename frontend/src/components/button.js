export default function Button({ children, onClick }) {
  return (
    <button className="btn btn-outline" onClick={onClick}>
      {children}
    </button>
  );
}
