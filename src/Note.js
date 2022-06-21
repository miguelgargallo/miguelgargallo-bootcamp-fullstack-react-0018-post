export const Note = ({ id = [], title = [], body = [] }) => {
  return (
    <li>
      <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </li>
  );
};
