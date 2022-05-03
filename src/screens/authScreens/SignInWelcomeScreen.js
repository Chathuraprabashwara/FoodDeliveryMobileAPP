import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button, SocialIcon } from "@rneui/base";
import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";

export default function SignInWelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.textContainer}>
        <Text style={styles.textstyle}>Discover Cafetaria</Text>
        <Text style={styles.textstyle}>In Your Campus</Text>
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                url: "https://img.freepik.com/free-photo/juicy-american-burger-hamburger-cheeseburger-with-two-beef-patties-with-sauce-basked-black-space_124865-5964.jpg?w=2000",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                url: "http://2.bp.blogspot.com/-KLubE3S7E1U/VzvjjJXMadI/AAAAAAAADAE/bAVxhDJpvZIdRm4zqCi1Mr2Uh_CTmEBbACK4B/s1600/image_5.jpeg",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                url: "https://cdn.pixabay.com/photo/2021/05/12/01/42/rice-6247160_1280.jpg",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.slide4}>
            <Image
              source={{
                url: "https://res.cloudinary.com/hamstech/images/v1632121563/Hamstech%20App/Title-Image_80464696efa86/Title-Image_80464696efa86.jpg?_i=AA",
              }}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
      <View style={{ flex: 4, justifyContent: "flex-end", marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          />
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 26,
    color: colors.buttons,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    paddingTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
