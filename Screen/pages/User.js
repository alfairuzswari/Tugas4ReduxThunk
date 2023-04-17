import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/actions/userAction";
import {Text, View, FlatList, StyleSheet} from "react-native";

const User = ({navigation}) => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const renderItem = ({ item }) => (
        <Text key={item.id}>{item.name}</Text>
      );
    
      return (

        <View>
            <View style={styles.title}>
                <Text>NAMA YANG TELAH MEMBELI TIKET</Text>
            </View>
            <View style={styles.desc}>
                <FlatList
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
      );
};

const styles = StyleSheet.create({
    desc: {
        color: "#ADEFD1FF",
        marginBottom: 1,
        padding: 50,
        marginTop: 1,
        textAlign: "center",
    },
    title: {
        color: "#ADEFD1FF",
        marginBottom: 0,
        padding: 50,
        marginTop: 50,
        textAlign: "center",
    },
});

export default User;
