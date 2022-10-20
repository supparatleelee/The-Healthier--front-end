import { useSelector } from 'react-redux';

function Container({ children }) {
  const state = useSelector((state) => state.auth);
  const user = state.userInfo;

  return (
    <>
      {user?.id ? (
        <div className="w-screen inline-block mt-28">{children}</div>
      ) : (
        <div className="w-screen inline-block">{children}</div>
      )}
    </>
  );
}

export default Container;
