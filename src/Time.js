import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions
} from "react-native";
const { width } = Dimensions.get("window");
const Time = (time) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onScroll={(e) => {
          const w = width / 3;
          let offset = e.nativeEvent.contentOffset.x;
          let index = parseInt(offset / w) + 1;
          console.log("now index is " + index);
        }}
        data={time.time}
        renderItem={({ item, index }) => (
          <View style={{ width: "100%" }}>
            <Text style={styles.day}> {item.time}</Text>
          </View>
        )}
        // keyExtractor={(item) => index}
        ListFooterComponent={<View style={{ height: width / 3 }}></View>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#283165"
  },
  day: {
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    fontWeight: "300",
    color: "white",
    padding: 20
  },

  tabContainer: {
    overflow: "hidden"
  }
});
export default Time;
