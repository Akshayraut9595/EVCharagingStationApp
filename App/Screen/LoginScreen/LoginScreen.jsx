import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../Utils/Colors";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/images/logo.png")}
        style={styles.logoImage}
      />

      {/* <Image
        source={require("./../../../assets/images/evStation.jpg")}
        style={styles.bgImage}
      /> */}

      <View style={styles.headingContainer}>
        <Text style={styles.heding}>
          Your Ultimate EV Charging Station Finder App
        </Text>
        <Text style={styles.desc}>
          Find EV Charging Station near you, plan trip and so much more in just
          one click
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log("Button Click")}
        >
          <Text style={styles.btnInfo}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  logoImage: {
    marginTop:150,
    width: 500,
    height: 300,
    objectFit: "cover",
  },
  bgImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
    objectFit: "cover",
    
  },
  headingContainer: {
    marginLeft: 2,
    marginRight: 2,
  },
  heding: {
    fontSize: 25,
    fontFamily: "SemiBold",
    textAlign: "center",
    // marginTop: 20,
  },
  desc: {
    fontSize: 17,
    fontFamily: "Regular",
    marginTop: 15,
    textAlign: "center",
    color: Colors.gray,
    marginLeft: 2,
    marginRight: 2,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 50,
  },
  btnInfo: {
    color: Colors.white,
    textAlign: "center",
    fontFamily: "SemiBold",
    fontSize: 17,
  },
});
