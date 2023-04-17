import { React, useState } from "react";
import {
  Image,
  StyleSheet,
  Text, 
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={30} color="white" />
        <Text style={styles.title}>Booking Ticket</Text>
        <FontAwesome name="user-o" size={30} color="white" />
      </View>
      <View style={styles.UIContainer}>
        <Text>Lokasi Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          {
            <Image
              style={styles.icon}
              source={require("../assets/takeOff.png")}
            />
          }
          <TextInput
            style={styles.input}
            onChangeText={setDeparture}
            value={departure}
            placeholder="Masukkan Lokasi Keberangkatan"
            selectTextOnFocus={false}
          />
        </View>
        <Text>Lokasi Tujuan</Text>
        <View style={styles.textInputContainer}>
          {
            <Image
              style={styles.icon}
              source={require("../assets/landing.png")}
            />
          }
          <TextInput
            style={styles.input}
            onChangeText={setDestination}
            value={destination}
            placeholder="Masukkan Lokasi Tujuan"
          />
        </View>
        <Text>Tanggal Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          <Fontisto name="date" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={setDate}
            value={date}
            placeholder="Masukkan Tanggal Keberangkatan"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main Screen")}>
          <Text style={styles.button}>Cari</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}>
            copyright M. Al Fairuz Swari - 120140102
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#00AA13",
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    fontSize: 15,
    fontWeight: "bold",
    color: "#00203FFF",
    borderWidth: 1,
    borderColor: "#00203FFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#00AA13",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 280,
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#ffc0cb",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 50,
    justifyContent: "space-between",
    width: "110%",
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    borderRadius: 3,
  },
  textInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#00203FFF",
  },
  title: {
    color: "white",
    fontSize: 35,
  },
  UIContainer: {
    backgroundColor: "#ADEFD1FF",
    margin: "auto",
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  copyright: {
    color: "#000000",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default HomeScreen;
