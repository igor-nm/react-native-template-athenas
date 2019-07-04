import Theme from "~/components/Theme";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen");

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-top: ${height * 0.2}px;
    background-color: ${Theme.primary};
`;

export const Row = styled.View`
    display: flex;
    margin-bottom: 10px;
    flex-direction: row;
`;

export const Welcome = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: ${Theme.white};
`;

export const Text = styled.Text`
    text-align: center;
    color: ${Theme.white};
`;
