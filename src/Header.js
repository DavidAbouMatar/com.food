import React, { useRef, useState } from "react";
import Time from "./Time";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView
} from "react-native";

const { width } = Dimensions.get("window");

const Header = ({ days, time }) => {
  const [scroll, setScroll] = useState(0);
  const scrollView = useRef();
  const flatListRef = useRef();
  // const onScroll = (event) => {
  //   const scrollOffset = event.nativeEvent.contentOffset.x;
  //   setScroll(scrollOffset);
  // };

  return (
    <View style={styles.containerHeader}>
      <View>
        <FlatList
          onScroll={(e) => {
            const w = width / 3;
            let offset = e.nativeEvent.contentOffset.x;
            let index = parseInt(offset / w) + 1;
            setScroll(index);
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onTouchMove={() => scrollView.current.scrollTo({ x: width * scroll })}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50
          }}
          horizontal={true}
          data={days}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: width / 3,
                height: 60,
                backgroundColor: "#39437C"
              }}
            >
              <Text style={styles.day}> {item}</Text>
            </View>
          )}
          ListHeaderComponent={
            <View style={{ width: width / 2 - width / 4 }}></View>
          }
          ListFooterComponent={
            <View style={{ width: width / 2 - width / 4 }}></View>
          }
        />
      </View>
      <ScrollView
        ref={scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      >
        <View style={{ width: "100%", alignItems: "center" }}>
          <FlatList
            ref={flatListRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={days}
            renderItem={({ item, index }) => (
              <View style={{ width: width, alignItems: "center" }}>
                <Time time={time} />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#283165"
  },
  day: {
    fontSize: 20,
    color: "white"
  },

  tabContainer: {
    width: "100%",
    overflow: "hidden"
  }
});
export default Header;
