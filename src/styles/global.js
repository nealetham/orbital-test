import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  headerText: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: "400",
  },
  subHeaderText: {
    marginBottom: 5,
    fontSize: 22,
    fontWeight: "400",
  },
  bodyText: {
    textAlign: "center",
  },
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#FFFFFF",
  },
  containerDrawer: {
    flex: 1,
    marginTop: 15,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: "#FFFFFF",
  },
  taskContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 7,
    marginBottom: 7,
    marginRight: 5,
    marginLeft: 5,
    height: 55,
    backgroundColor: "#FFFFFF",
    elevation: 1.5,
    borderRadius: 15,
    alignItems: "center",
    borderColor: "#e8e8e8",
    borderWidth: 0.4,
  },
  taskCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: "#Fff0d4",
    borderColor: "rgba(255, 169, 50, 1)",
    borderWidth: 2,
    marginLeft: 15,
    marginRight: 15,
  },
  taskText: {
    fontSize: 16,
    width: 200,
  },
  inlineTextButton: {
    paddingTop: 15,
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 0.5,
    color: "#FFDCAB",
  },
  textInputContainer: {
    borderRadius: 15,
    backgroundColor: "#FAFAFA",
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 16,
    height: 45,
  },
  outIconTextInputContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#FAFAFA",
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 10,
    marginRight: 30,
    marginBottom: 16,
    height: 35,
  },
  backButton: {
    elevation: 8,
    backgroundColor: "#Fff0d4",
    borderRadius: 15,
    height: 34,
    width: 148,
    paddingVertical: 6,
    position: "absolute",
    left: 30,
    bottom: 45,
  },
  nextButton: {
    elevation: 8,
    backgroundColor: "#Fff0d4",
    borderRadius: 15,
    height: 34,
    width: 148,
    paddingVertical: 6,
    position: "absolute",
    right: 30,
    bottom: 45,
  },
  actionButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(255, 169, 50, 1)",
  },
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: 15,
    elevation: 8,
    position: "absolute",
    right: 20,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addTaskBottomSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: 400,
    paddingTop: 30,
  },
});
