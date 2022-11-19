import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { incrementByAmount } from "../../features/counter/counterSlice";
import { setUsers } from "../../features/users/users.slice";

const connect = async function () {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res;
  } catch (e) {}
};

export const Main = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state: RootState) => state.counter.value);
  const users = useAppSelector((state: RootState) => state.users.users);

  const onCLick = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(incrementByAmount(1));
  };

  useEffect(() => {
    const asyncFetchDailyData = async () => {
      try {
        const res = await connect();
        dispatch(setUsers(res!.data));
      } catch (e) {
        console.log(e);
      }
    };

    asyncFetchDailyData();
  }, []);

  return (
    <div
      data-testid="btn"
      onClick={onCLick}
      style={{ width: "100vw", height: "100vh", background: "red" }}
    >
      <Link data-testid="link" to={"/some"}>
        asdas
      </Link>
      <div>Main</div>
      <div>GetUsers</div>
      <div>
        {users.map((user) => <div data-testid="listitem">{user.name}</div>) ||
          "no users"}
      </div>
      {value}
    </div>
  );
};

export const Some = () => {
  return <div data-testid="some">Some</div>;
};

export const Axios = () => {
  const [data, setData] = useState<null | any[] | any>(null);

  useEffect(() => {
    const asyncFetchDailyData = async () => {
      try {
        const res = await connect();
        setData(res?.data);
      } catch (e) {
        console.log(e);
      }
    };
    asyncFetchDailyData();
    // setTimeout(() => {
    //     setData('Jane Dpe')
    // },1000)
  }, []);

  return (
    <>
      <div>Router</div>
      {/* {data?.map((user: any) => <div>{user.name}</div>) || 'no users'} */}
      {data ? "Jane Dpe" : "false"}
    </>
  );
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/op" element={<Main />} />
      <Route path="/some" element={<Some />} />
    </Routes>
  );
};
