import {
  View,
  Text,
  TouchableOpacity, StyleSheet, Alert, Pressable,
} from "react-native";
import {theme} from "../theme";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

type Props = {
  name: string;
  isComplete?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
}

export function ShoppingListItem( { name, isComplete, onDelete, onToggleComplete }: Props ) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete this ${ name }?`,
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => onDelete(),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        }
      ])
  }

  return (
    <Pressable
      style={[styles.itemContainer,
        isComplete ? styles.completedContainer : undefined]}
      onPress={() => onToggleComplete()}
    >
      <View style={styles.row}>
        <Entypo name={ isComplete ? "check" : "circle" } size={24} color={ isComplete ? theme.colorGrey : theme.colorCerulean }
        />
        <Text numberOfLines={1} style={[styles.itemText, isComplete ? styles.completedText : undefined]}>{ name }</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete()} activeOpacity={0.8}>
        <AntDesign name="closecircle" size={24} color={isComplete ? theme.colorGrey : theme.colorRed} />
      </TouchableOpacity>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
    flex: 1
  },
  completedText: {
    textDecorationColor: theme.colorGrey,
    textDecorationLine: "line-through",
    color: theme.colorGrey,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    flex: 1
  },
});

