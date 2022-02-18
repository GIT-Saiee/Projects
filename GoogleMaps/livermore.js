<script>
      // Initialize and add the map
      function initMap() {
        // The location of SVT,Livermore 37.71330527803247, -121.73227685704794
        const svt = { lat: 37.71330527803247, lng: -121.73227685704794 };
        // The map, centered at VT,Livermore
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: svt,
        });
        // The marker, positioned at Livermore,SVT
        const marker = new google.maps.Marker({
          position: svt,
          map: map,
        });
        const contentString =
             '<div id="content">' +
             '<div id="siteNotice">' +
             "</div>" +
             '<h1 id="firstHeading" class="firstHeading">Livermore</h1>' +
             '<div id="bodyContent">' +
              "<p><b>Shiva-Vishnu Temple</b></p>" +'<p>Attribution: <a href="https://en.wikipedia.org/wiki/List_of_Hindu_temples_in_the_United_States">For All temples in US, </a></p>'+"</div>" +
              "</div>";
        // Info window showing the information about SVT location
        const infowindow1 =new google.maps.InfoWindow({
            content: contentString,});
        marker.addListener("click", () => {infowindow1.open({anchor: marker, map, shouldFocus: false,});
       });
      }
</script>
