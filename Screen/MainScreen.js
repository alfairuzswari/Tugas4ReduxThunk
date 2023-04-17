import React from "react";
import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const Jadwal = [
  {
    id: "1",
    departureCity: "Bogor",
    arrivalCity: "Tokyo",
    airline: "Sunda Air",
    departureDate: "5 Mar 2022, 10:00 A.M",
  },
  {
    id: "2",
    departureCity: "Jakarta",
    arrivalCity: "Berlin",
    airline: "Betawi Air",
    departureDate: "6 Mar 2022, 2:00 P.M",
  },
  {
    id: "3",
    departureCity: "Jakarta",
    arrivalCity: "Surabaya",
    airline: "Dog Air",
    departureDate: "5 Mar 2022, 03:00 P.M",
  },
  {
    id: "4",
    departureCity: "Lampung",
    arrivalCity: "New York",
    airline: "Jawa Air",
    departureDate: "7 Mar 2022, 05:00 P.M",
  },
  {
    id: "5",
    departureCity: "Jogja",
    arrivalCity: "London",
    airline: "Main Air",
    departureDate: "5 Mar 2022, 04:00 P.M",
  },
  {
    id: "6",
    departureCity: "Bogor",
    arrivalCity: "Roma",
    airline: "Pistol Air",
    departureDate: "6 Mar 2022, 06:00 P.M",
  },
];

const MainScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("User")}>
      <View style={styles.itemContainer}>
        <Text>
          {item.departureCity} - {item.arrivalCity}
        </Text>
        <View style={styles.detailContainer}>
          <View style={styles.airlineContainer}>
            <MaterialIcons name="airplanemode-active" size={28} color="black" />
            <Text style={styles.airline}>{item.airline}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              <FontAwesome5 name="plane-departure" size={15} color="black" />
              {item.departureDate}
            </Text>
          </View>
        </View>
      </View>
          
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.pop()}
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Booking Ticket</Text>
          <FontAwesome name="user-o" size={30} color="white" />
        </View>
        <Text style={styles.subTitle}>Hasil Pencarian Penerbangan</Text>
      </View>
      <FlatList
        data={Jadwal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.copyright}>
        M. Al Fairuz Swari - 120140102
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc0cb",
    marginTop: 20,
  },
  header: {
    width: "100%",
    backgroundColor: "#00AA13",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  subTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#ADEFD1FF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  airlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "red",
  },
  dateContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "space-between",
  },
  airline: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  date: {
    color: "#00203FFF",
  },
  copyright: {
    color: "black",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default MainScreen;
