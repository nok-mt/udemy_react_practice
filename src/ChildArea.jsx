export const ChildArea = (props) => {
  const { open } = props;

  const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
  };

  return (
    <>
      {open && (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      )}
    </>
  );
};
