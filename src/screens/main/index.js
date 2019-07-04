import React from "react";
import Theme from "~/components/Theme";
import { Row, Text, Container, Welcome } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home() {
    return (
        <Container>
            <Row>
                <Icon size={36} color={Theme.white} name="phone-android" />
                <Icon size={36} color={Theme.white} name="desktop-mac" />
                <Icon size={36} color={Theme.white} name="phone-iphone" />
            </Row>

            <Welcome>{"Welcome to Athena's template!"}</Welcome>

            <Text style={{ marginBottom: 20 }}>
                {"This is it main screen in your application :D"}
            </Text>

            <Text>{"You may edit screen on file:"}</Text>
            <Text style={{ fontWeight: "bold" }}>
                {"src/screens/main/index.js"}
            </Text>
        </Container>
    );
}
