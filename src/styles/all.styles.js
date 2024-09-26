import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bgWhite: {
    backgroundColor: "#fff",
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  justifyCenter: {
    alignItems: 'center'
  },
  fontBold: {
    fontWeight: 'bold'
  },
  colorBlack: {
    color: "#000"
  },
  bgViewInputText: {
    margin: 13,
    overflow: "hidden",
    paddingBottom: 5,
    borderRadius: 25,
  },
  viewInputText: {
    borderRadius: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopColor: "#fff",
    shadowColor: "gray",
    elevation: 5,
  },
  imageSearch: {
    width: 17,
    height: 17,
  },
  imageClose: {
    width: 17,
    height: 19,
  },
  inputText: {
    color: "#000",
    fontSize: 15,
    marginHorizontal: 8,
    flex: 1,
  },
  //Item
  viewItemSearch: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
  },
  imageLocation: {
    width: 15,
    height: 22,
  },
  itemSearchText: {
    flex: 1,
    fontSize: 15,
    marginTop: 3,
    paddingHorizontal: 10,
    color: 'gray'
  },
  bgImageForward: {
    width: 18,
    height: 18,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    transform: [{ rotate: '45deg'}],
  },
  imageForward: {
    width: 11,
    height: 11,
    tintColor: "#fff",
    transform: [{ rotate: '-45deg'}]
  },
});
