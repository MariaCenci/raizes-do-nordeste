import "./style.scss";

const Tag = ({ tag }) => {
  return (
    <>
      <div className="tag-container">
        <span className="tag">{tag}</span>
      </div>
    </>
  );
};

export default Tag;
