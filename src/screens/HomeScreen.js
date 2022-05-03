import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { Icon } from "@rneui/base";
import Countdown from "react-native-countdown-component";
import {} from "react-native-gesture-handler";
import { filterData, restaratsData } from "../global/Data";
import FoodCard from "../components/FoodCard";

export default function HomeScreen({ navigation }) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  const SCREEN_WIDTH = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          <View
            style={{
              marginTop: 0,
              flexDirection: "row",
              justifyContent: "space-evenly",
              backgroundColor: "rgb(242,242,242)",
              paddingVertical: 8,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}
              >
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate("RestaurentMapScreen")
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}
              >
                <Text style={styles.deliveryText}>Pick up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* filter view start */}

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View style={styles.filterViewContent}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text> Nilaweli Hostle</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>

        {/* filter view End */}

        {/* ********************************************************** */}

        {/* Category start */}

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image style={styles.categoryImages} source={item.image} />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...styles.smallCardTextSelected }
                          : { ...styles.smallCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        {/* Category end */}

        {/* ********************************************************** */}

        {/*start  Free Delivery */}

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery Now</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          <Text style={styles.countdownText}>Options Chnaging in </Text>
          <Countdown
            until={3600}
            size={14}
            digitStyle={{ backgroundColor: colors.lightgreen }}
            digitTxtStyle={{ color: "white" }}
            timeToShow={["M", "S"]}
            timeLabels={{ m: "Min", s: "Sec" }}
          />
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaratsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginRight: 10 }}>
                <FoodCard
                  screenwidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        {/* Free Delivery end */}

        {/* ********************************************************** */}

        {/*start  Promotions */}

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions Available</Text>
        </View>

        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaratsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ marginRight: 10 }}>
                <FoodCard
                  screenwidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        {/* Promotions  end */}

        {/* ********************************************************** */}

        {/*start  Restaurent in Your area */}
        <View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}> Restaurent in Your area</Text>
          </View>
          <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
            {restaratsData.map((item) => (
              <View key={item.id} style={{ paddingBottom: 20 }}>
                <FoodCard
                  screenwidth={SCREEN_WIDTH * 0.95}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            ))}
          </View>
        </View>
          {/* end Restaurent in Your area */}
      </ScrollView>

        {/*start  Map icon */}

      { delivery &&
      <View style={styles.floatButton}>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate("RestaurentMapScreen")
        }}
        >
          <Icon name="place" type="material" size={32} color={colors.buttons} />
          <Text style={{ color: colors.grey2 }}>Map</Text>
        </TouchableOpacity>
      </View>
}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 9,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  addressView: {
    flexDirection: "row",
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginRight: 15,
  },
  filterViewContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  filterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  clockView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 20,
  },
  headerText: {
    color: colors.grey2,
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  categoryImages: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  smallCardTextSelected: {
    fontWeight: "bold",
    color: colors.cardbackground,
  },
  smallCardText: {
    fontWeight: "bold",
    color: colors.grey2,
  },
  countdownText: {
    marginLeft: 5,
    marginTop: -9,
    marginRight: 5,
    fontWeight: "bold",
    color: colors.grey1,
    fontSize: 16,
  },
  floatButton: {
    position: "absolute",
    bottom: 10,
    right: 15,
    backgroundColor: "white",
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
});
