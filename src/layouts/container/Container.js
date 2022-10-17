function Container({ children }) {
  let user = 0;

  return (
    <>
      {user ? (
        <div className="w-screen inline-block mt-28">{children}</div>
      ) : (
        <div className="w-screen inline-block">{children}</div>
      )}
    </>
  );
}

export default Container;
