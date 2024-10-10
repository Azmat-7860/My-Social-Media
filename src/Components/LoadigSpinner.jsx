export const Spinner = () => {
  return (
    <div className="d-flex justify-content-center my-5 mx-5">
      <div
        className="spinner-border text-warning"
        style={{ height: "4rem", width: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
