import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "../App";
import { TestWrapper } from "../components/UserPage/TestWrapper";

test("renders learn react link", () => {
  const Users = render(
    <TestWrapper initialRoute={'/'} />
  );
  const users = screen.getByTestId("users")
  const user = screen.getAllByTestId("user")
  expect(users).toBeInTheDocument();
  expect(user.length).toBe(3)
  const viewBtn = screen.getByTestId('view')
  fireEvent.click(viewBtn)
  const newUsers = screen.getAllByTestId("user")
  expect(newUsers.length).toBe(6)
  expect(Users).toMatchSnapshot()
});
