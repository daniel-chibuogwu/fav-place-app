const GOOGLE_API_KEY = "AIzaSyBeKyPVXlRuCMitucuzAWKRLgupeOePJ6E";

export function getMapPreview({ lat, lng }) {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
}

export async function getAddress(lat, lng) {
  //couldn't complete this because I didn't have the  billings access for google
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }
  const data = await response.json();
  const address = data.results.at(0).formatted_address;
  return address;
}
