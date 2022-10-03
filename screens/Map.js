import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 6.470813758797081,
    longitude: 3.2875529352730766,
    latitudeDelta: 0.122,
    longitudeDelta: 0.0421,
  };
  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude; // you can console.log the event to see the structure of the object passed automatically by the press of the MapView component.
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat, lng });
  }
  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map) first!"
      );
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: ({ tintColor }) => (
          <IconButton
            name="location"
            color={tintColor}
            size={24}
            onPress={savePickedLocationHandler}
          />
        ),
      },
      [navigation, savePickedLocationHandler]
    );
  });
  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
