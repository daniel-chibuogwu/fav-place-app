import PlaceForm from "../components/Places/PlaceForm";

function AddPlace({ route }) {
  const pickedLocation = route.params;
  return <PlaceForm />;
}

export default AddPlace;
