import React from "react";
import { configureStore } from "redux-starter-kit";
import { Provider } from "react-redux";
import { ThemeProvider } from "@chakra-ui/core";
import rootReducer from "./Reducers";
import TabMenu from "./Features/TabMenu";

export const store = configureStore({
  reducer: rootReducer
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="App">
          <TabMenu />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
