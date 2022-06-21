export const Note = ({ id = [], title = [], body = [] }) => {
  return (
    <ol>
      <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </ol>
  );
};
