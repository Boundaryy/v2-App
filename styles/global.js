import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    width:"100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: 'absolute',
    bottom: 60,
    fontSize: 14,
    color: '#808080',
  },
  header: {
    position: "absolute",
    top: 80,
    left: 44,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5772FF',
  },
  subtitle: {
    fontSize: 28,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    color: '#898989',
  }
});