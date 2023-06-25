import { View, Text, Button, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import screens from "../screens.json";
import { api } from "../api";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Notepad } from "../types";
import type { ParamListBase } from "@react-navigation/native";

const initialNotepad: Notepad = {
  id: 0,
  title: "",
  subtitle: "",
  created_at: "",
  content: "",
};

export function NoteView({ navigation, route }: NativeStackScreenProps<any>) {
  const [notepad, setNotepad] = useState(initialNotepad);
  const id = route.params.id;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { data } = await api.get(`/notepads/${id}`);
      setNotepad(data);
    });
  }, []);
  return (
    <NoteBox>
      <IdStyle>@{id}</IdStyle>
      <TitleStyle>{notepad.title}</TitleStyle>
      <SubtitleStyle>{notepad.subtitle}</SubtitleStyle>
      <ContentStyle>{notepad.content}</ContentStyle>
      <DateStyle>
        Criado em {new Date(notepad.created_at).toLocaleDateString()}
      </DateStyle>
      <ButtonBox>
        <DeleteButton
          title="Deletar"
          color="#eb4d4b"
          onPress={async () => {
            const { data } = await api.delete(`/notepads/${id}`);
            navigation.navigate(screens.notesList);
          }}
        />
        <EditButton
          title="Editar"
          color="#008080"
          onPress={async () => {
            navigation.navigate(screens.noteEdit, {
              id,
            });
          }}
        />
      </ButtonBox>
    </NoteBox>
  );
}

const IdStyle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #1e2022;
  margin-bottom: 5px;
`;

const TitleStyle = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
  color: #1e2022;
`;

const SubtitleStyle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #0d0e0e;
  margin-bottom: 10px;
`;

const ContentStyle = styled.Text`
  font-size: 18px;
  color: #0d0e0e;
  margin-bottom: 15px;
  margin-top: 5px;
`;

const DateStyle = styled.Text`
  font-style: italic;
  margin-top: 70px;
`;

const NoteBox = styled.View`
  background-color: #efc631;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 50px;
  width: 350px;
  height: 300px;
  align-self: center;
  justify-content: center;
`;

const ButtonBox = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`;

const DeleteButton = styled(Button)`
  width: 120px;
  border-radius: 10px;
`;

const EditButton = styled(Button)`
  width: 120px;
  border-radius: 10px;
`;
