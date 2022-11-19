import { Provider } from "react-redux";
import { store } from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import { Router } from "../../utils/Router/Router";

export const TestWrapper = ({ initialRoute }: any) => {
    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialRoute]}><Router /></MemoryRouter>
        </Provider>
    );
};