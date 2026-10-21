const fare = {
  Economy: 28,
  Executive: 42,
  SUV: 55,
  Van: 68,
};

const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const vehicleSelect = document.getElementById("vehicle");
const fareValue = document.getElementById("fareValue");

const setDefaultDateTime = () => {
  const now = new Date();
  const nextHour = new Date(now.getTime() + 60 * 60 * 1000);

  const date = nextHour.toISOString().split("T")[0];
  const time = nextHour.toTimeString().slice(0, 5);

  dateInput.value = date;
  timeInput.value = time;
};

const updateFare = () => {
  const selectedVehicle = vehicleSelect.value;
  fareValue.textContent = `$${fare[selectedVehicle]}`;
};

vehicleSelect.addEventListener("change", updateFare);

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const pickup = document.getElementById("pickup").value.trim();
  const dropoff = document.getElementById("dropoff").value.trim();
  const selectedDate = dateInput.value;
  const selectedTime = timeInput.value;
  const selectedVehicle = vehicleSelect.value;

  const summary = `Ride reserved from ${pickup} to ${dropoff} on ${selectedDate} at ${selectedTime} for a ${selectedVehicle} taxi.`;

  alert(summary);
});

setDefaultDateTime();
updateFare();
