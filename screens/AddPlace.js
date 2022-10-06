import PlaceForm from "../components/Places/PlaceForm";
import AllPlaces from "./AllPlaces";

function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place,
    });
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
