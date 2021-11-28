import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity
} from "react-native";
const { width } = Dimensions.get("window");
const Time = (time) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={time.time}
        renderItem={({ item, index }) => (
          <View style={{ width: "100%" }}>
            <TouchableOpacity>
              <Text style={styles.day}> {item.time}</Text>
            </TouchableOpacity>
          </View>
        )}
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
    fontWeight: "300",
    color: "white",
    padding: 20
  },

  tabContainer: {
    overflow: "hidden"
  }
});
export default Time;
