import React from "react";
import Routes from "~/routes";
import Theme from "~/components/Theme";
import { StatusBar } from "react-native";

const App = () => (
    <>
        <Routes />
        <StatusBar barStyle="light-content" backgroundColor={Theme.primary} />
    </>
);

export default App;
