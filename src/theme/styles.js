import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  text: { fontSize: 18, paddingBottom: 10 },
});

// Common stack header options
export const screenOptions = {
  headerStyle: {
    backgroundColor: "#fafafa",
  },
  headerTintColor: "#000",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default styles;
