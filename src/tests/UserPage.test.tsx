import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "../App";
import { TestWrapper } from "../components/UserPage/TestWrapper";

test("renders learn react link", () => {
    const UserPage = render(
        <TestWrapper initialRoute={'/user/2'} />
    )
    const userPage = screen.getByTestId('userPage')
    expect(userPage).toBeInTheDocument()
    expect(UserPage).toMatchSnapshot()
}); 
