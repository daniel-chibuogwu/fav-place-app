import axios from "axios";

const LocationIQ_ACCESS_TOKEN = "pk.d51fcb9d23346abffced08d9f65dd6d4";

export function getMapPreview({ lat, lng }) {
  return `https://maps.locationiq.com/v3/staticmap?key=${LocationIQ_ACCESS_TOKEN}&markers=icon:large-red-cutout|${lat},${lng}&zoom=14`;
}

export async function getAddress(lat, lng) {
  //This returns the human readable addresses;
  try {
    const response = await axios.get(
      `https://us1.locationiq.com/v1/reverse?key=${LocationIQ_ACCESS_TOKEN}&lat=${lat}&lon=${lng}&format=json`
    );
    return response.data.display_name;
  } catch (e) {
    console.log(e, "There was an error");
  }
}
