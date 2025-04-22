// Replace YOUR_MAPBOX_ACCESS_TOKEN with your actual token from https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoibmtvcmFkYTEiLCJhIjoiY205cnVwOXBkMDc2NzJ0cHVmMWptODBvYiJ9.nqbM5Oe0Pg7CUTZzmdHwSQ';

const locationSelect = document.getElementById("location-select");
const geoBtn = document.getElementById("geo-btn");
const dashboard = document.getElementById("dashboard");
const errorMsg = document.getElementById("error-msg");

// Initialize Mapbox map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 20],
  zoom: 2
});

// Add zoom and rotation controls
map.addControl(new mapboxgl.NavigationControl());

// Create and store marker
const marker = new mapboxgl.Marker().setLngLat([0, 20]).addTo(map);

const loadingSpinner = document.createElement("div");
loadingSpinner.id = "spinner";
loadingSpinner.innerHTML = "<div class='loader'></div>";
document.body.appendChild(loadingSpinner);

function toggleSpinner(show) {
  loadingSpinner.style.display = show ? "flex" : "none";
}

locationSelect.addEventListener("change", () => {
  const [lat, lng] = locationSelect.value.split(",");
  updateMap(lat, lng);
  fetchSunriseSunset(lat, lng);
});

geoBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    errorMsg.textContent = "Geolocation not supported.";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      updateMap(latitude, longitude);
      fetchSunriseSunset(latitude, longitude);
    },
    () => {
      errorMsg.textContent = "Unable to get location.";
    }
  );
});

function updateMap(lat, lng) {
  const coords = [parseFloat(lng), parseFloat(lat)];
  map.flyTo({ center: coords, zoom: 8 });
  marker.setLngLat(coords).setPopup(new mapboxgl.Popup().setText(`Lat: ${lat}, Lng: ${lng}`)).addTo(map);
}

async function fetchSunriseSunset(lat, lng) {
  errorMsg.textContent = "";
  dashboard.innerHTML = "";
  toggleSpinner(true);

  try {
    const [today, tomorrow] = await Promise.all([
      fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=today`).then(r => r.json()),
      fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=tomorrow`).then(r => r.json())
    ]);

    if (today.status !== "OK" || tomorrow.status !== "OK") {
      throw new Error("API Error");
    }

    renderDashboard({ today: today.results, tomorrow: tomorrow.results });
  } catch (err) {
    errorMsg.textContent = "❌ Failed to load data.";
    console.error(err);
  } finally {
    toggleSpinner(false);
  }
}

function renderDashboard(data) {
  dashboard.innerHTML = "";
  const currentTime = new Date().toLocaleString();
  const timeBanner = document.createElement("p");
  timeBanner.style.fontWeight = "bold";
  timeBanner.style.marginBottom = "1rem";
  timeBanner.textContent = `⏰ Current Time: ${currentTime}`;
  dashboard.appendChild(timeBanner);

  ["today", "tomorrow"].forEach(day => {
    const d = data[day];
    const card = document.createElement("div");
    card.className = "data-card animate-fade-in";
    card.innerHTML = `
      <h3>${capitalize(day)}</h3>
      <p><strong>Sunrise:</strong> ${d.sunrise}</p>
      <p><strong>Sunset:</strong> ${d.sunset}</p>
      <p><strong>Dawn:</strong> ${d.dawn}</p>
      <p><strong>Dusk:</strong> ${d.dusk}</p>
      <p><strong>Solar Noon:</strong> ${d.solar_noon}</p>
      <p><strong>Day Length:</strong> ${d.day_length}</p>
      <p><strong>Timezone:</strong> ${d.timezone}</p>
    `;
    dashboard.appendChild(card);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}