// Initialize and add the map
function initMap(): void {
  // The location of SVT @37.713296790648414, -121.732373416571
  const SVT = { lat: 37.713296790648414, lng: -121.732373416571};
  // The map, centered at LiverMore SVT
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 15,
      center: SVT,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: SVT,
    map: map,
  });
}
