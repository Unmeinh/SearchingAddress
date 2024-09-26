import React, { useState } from "react";
import {
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Linking,
} from "react-native";
import styles from "../styles/all.styles";

const SearchingScreen = () => {
  const [inputSearch, setinputSearch] = useState("");
  const [isSearching, setisSearching] = useState(false);
  const [arr_address, setarr_address] = useState([]);

  const ItemSearch = ({ item, index }) => {
    const ItemTitle = () => {
      const regexString = inputSearch?.split("").join("\\s*");
      const regexHighlight = new RegExp(`(${regexString})`, "gi");
      const parts = item?.title?.split(regexHighlight);

      return (
        <Text style={styles.itemSearchText}>
          {parts.map((part, index) =>
            part.toLowerCase().replace(/\s+/g, "") ===
            inputSearch.toLowerCase().replace(/\s+/g, "") ? (
              <Text style={[styles.fontBold, styles.colorBlack]}>{part}</Text>
            ) : (
              <Text key={index}>{part}</Text>
            )
          )}
        </Text>
      );
    };

    function onOpenMap() {
      const latLng = `${item.position.lat},${item.position.lng}`;
      const naviUrl = `google.navigation:q=${latLng}`;
      Linking.openURL(naviUrl);
    }

    return (
      <View style={styles.viewItemSearch}>
        <Image
          source={require("../assets/images/Location.png")}
          style={styles.imageLocation}
        />
        <View style={[styles.flexRow, styles.justifyCenter]}>
          <ItemTitle key={index} />
          <TouchableOpacity style={styles.bgImageForward} onPress={onOpenMap}>
            <Image
              source={require("../assets/images/Forward.png")}
              style={styles.imageForward}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  function onClearText() {
    setinputSearch("");
    setarr_address([]);
  }

  function onChangeText(input) {
    setisSearching(true);
    setinputSearch(input);
    onSearching(input);
  }

  async function onSearching(input) {
    const url = `https://geocode.search.hereapi.com/v1/geocode?q=${input}&apikey=dU4TicbYntnn-RFM08IqED4Tsj8a0lJG55NDOf-lEEk`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setarr_address([]);
      setarr_address(json.items);
      setisSearching(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <View style={[styles.container, styles.bgWhite]}>
      <View style={styles.bgViewInputText}>
        <View style={styles.viewInputText}>
          {isSearching ? (
            <ActivityIndicator size="small" style={styles.imageSearch} />
          ) : (
            <Image
              source={require("../assets/images/Search.png")}
              style={styles.imageSearch}
            />
          )}
          <TextInput
            placeholder="Enter keyword"
            placeholderTextColor="#C7C7C7"
            style={styles.inputText}
            value={inputSearch}
            onChangeText={onChangeText}
          />
          {inputSearch ? (
            <TouchableOpacity onPress={onClearText}>
              <Image
                source={require("../assets/images/Close.png")}
                style={styles.imageClose}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      <FlatList
        data={arr_address}
        renderItem={({ item, index }) => (
          <ItemSearch index={index} item={item} key={index} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SearchingScreen;
