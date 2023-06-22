import type { Notepad } from "../types";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

export type NotepadItemProps = {
  onPress: () => void;
  notepad: Notepad;
};

const ItemTouchable = styled.TouchableOpacity`
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
`;

const ItemTitle = styled.Text`
  font-size: 18px;
`;

const ItemSubtitle = styled.Text`
  font-size: 14px;
  color: #222;
`;

const ItemDate = styled.Text`
  font-size: 10px;
  color: #222;
`;

export function NoteItem({
  onPress,
  notepad: { title, subtitle, created_at },
}: NotepadItemProps) {
  return (
    <ItemTouchable onPress={onPress}>
      <ItemDate>{new Date(created_at).toLocaleDateString}</ItemDate>
      <ItemTitle>{title}</ItemTitle>
      <ItemSubtitle>{subtitle}</ItemSubtitle>
    </ItemTouchable>
  );
}
