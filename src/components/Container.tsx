import React from "react";
import styled from "styled-components/native";
import screens from "../screens.json";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ParamListBase } from "@react-navigation/native";

interface Props extends NativeStackScreenProps<ParamListBase> {}

export function Container({ navigation }: Props) {
  return (
    <ContainerDiv>
      <Header>React Native App</Header>
      <WelcomeText>Bem-vindo ao meu app!</WelcomeText>
      <Button
        onPress={() => {
          navigation.navigate(screens.noteCreate);
        }}
      >
        <ButtonText>Crie um notepad</ButtonText>
      </Button>
      <Button
        onPress={() => {
          navigation.navigate(screens.notesList);
        }}
      >
        <ButtonText>Veja os notepads</ButtonText>
      </Button>
      <Button onPress={() => alert("Botão pressionado")}>
        <ButtonText>Visualize o mapa</ButtonText>
      </Button>
    </ContainerDiv>
  );
}
const ContainerDiv = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const WelcomeText = styled.Text`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Button = styled.TouchableOpacity`
  background-color: #008080;
  padding: 16px 32px;
  margin-top: 15px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
