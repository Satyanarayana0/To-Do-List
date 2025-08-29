// --- To-Do List Functionality ---
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById('addBtn');
    const todoInfoInput = document.getElementById('todoInfo');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener("click", addTask);
    todoInfoInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") addTask();
    });

    function addTask() {
        let input = todoInfoInput.value.trim();
        if (input === "") {
            console.error("Please enter a task!");
            return;
        }

        let ele = document.createElement('li');
        let taskTextSpan = document.createElement('span');
        let buttonContainer = document.createElement('div');

        let doneBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        taskTextSpan.textContent = input;
        doneBtn.textContent = "Done";
        deleteBtn.textContent = "Delete";

        doneBtn.classList.add('done-btn');
        deleteBtn.classList.add('delete-btn');

        ele.appendChild(taskTextSpan);
        buttonContainer.appendChild(doneBtn);
        buttonContainer.appendChild(deleteBtn);
        ele.appendChild(buttonContainer);

        taskList.appendChild(ele);

        doneBtn.addEventListener("click", () => {
            ele.classList.toggle('completed');
            if (ele.classList.contains('completed')) {
                doneBtn.textContent = "Undo";
                doneBtn.style.backgroundColor = "#ffc107";
                doneBtn.style.color = "#333";
            } else {
                doneBtn.textContent = "Done";
                doneBtn.style.backgroundColor = "#007bff";
                doneBtn.style.color = "white";
            }
        });

        deleteBtn.addEventListener("click", () => {
            ele.remove();
        });

        todoInfoInput.value = "";
    }
});

// --- Weather Functionality ---
document.addEventListener("DOMContentLoaded", () => {
    const weatherForm = document.getElementById('weatherForm');
    const cityInfoInput = document.getElementById('cityInfo');
    const weatherDisplay = document.getElementById('weather-display');
    const gunturCitiesList = document.querySelector('.guntur-cities-list');

    const apiKey = "0f5c0ba37d02efb68c91fe6500b96c68"; // Replace if needed

    function fetchWeather(city) {
        if (city === "") {
            weatherDisplay.innerHTML = <p style="color:red;">Please enter a city name!</p>;
            return;
        }

        const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;
        weatherDisplay.innerHTML = <p>Loading weather for ${city}...</p>;

        axios.get(apiUrl)
            .then(res => {
                const data = res.data;
                weatherDisplay.innerHTML = `
                    <h3>City: ${data.name}</h3>
                    <h4>Temperature: ${data.main.temp}<sup>°C</sup></h4>
                    <p>Clouds: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            })
            .catch(error => {
                console.error("Error fetching weather:", error);
                weatherDisplay.innerHTML = <p style="color:red;">Could not find weather for "${city}".</p>;
            });
    }

    weatherForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let city = cityInfoInput.value.trim();
        fetchWeather(city);
        cityInfoInput.value = "";
    });

    if (gunturCitiesList) {
        gunturCitiesList.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI' && e.target.dataset.city) {
                const cityName = e.target.dataset.city;
                cityInfoInput.value = cityName;
                fetchWeather(cityName);
            }
        });
    }
});
// --- To-Do List Functionality ---
document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById('addBtn');
    const todoInfoInput = document.getElementById('todoInfo');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener("click", addTask);
    todoInfoInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") addTask();
    });

    function addTask() {
        let input = todoInfoInput.value.trim();
        if (input === "") {
            console.error("Please enter a task!");
            return;
        }

        let ele = document.createElement('li');
        let taskTextSpan = document.createElement('span');
        let buttonContainer = document.createElement('div');

        let doneBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');

        taskTextSpan.textContent = input;
        doneBtn.textContent = "Done";
        deleteBtn.textContent = "Delete";

        doneBtn.classList.add('done-btn');
        deleteBtn.classList.add('delete-btn');

        ele.appendChild(taskTextSpan);
        buttonContainer.appendChild(doneBtn);
        buttonContainer.appendChild(deleteBtn);
        ele.appendChild(buttonContainer);

        taskList.appendChild(ele);

        doneBtn.addEventListener("click", () => {
            ele.classList.toggle('completed');
            if (ele.classList.contains('completed')) {
                doneBtn.textContent = "Undo";
                doneBtn.style.backgroundColor = "#ffc107";
                doneBtn.style.color = "#333";
            } else {
                doneBtn.textContent = "Done";
                doneBtn.style.backgroundColor = "#007bff";
                doneBtn.style.color = "white";
            }
        });

        deleteBtn.addEventListener("click", () => {
            ele.remove();
        });

        todoInfoInput.value = "";
    }
});

// --- Weather Functionality ---
document.addEventListener("DOMContentLoaded", () => {
    const weatherForm = document.getElementById('weatherForm');
    const cityInfoInput = document.getElementById('cityInfo');
    const weatherDisplay = document.getElementById('weather-display');
    const gunturCitiesList = document.querySelector('.guntur-cities-list');

    const apiKey = "0f5c0ba37d02efb68c91fe6500b96c68"; // Replace if needed

    function fetchWeather(city) {
        if (city === "") {
            weatherDisplay.innerHTML = <p style="color:red;">Please enter a city name!</p>;
            return;
        }

        const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;
        weatherDisplay.innerHTML = <p>Loading weather for ${city}...</p>;

        axios.get(apiUrl)
            .then(res => {
                const data = res.data;
                weatherDisplay.innerHTML = `
                    <h3>City: ${data.name}</h3>
                    <h4>Temperature: ${data.main.temp}<sup>°C</sup></h4>
                    <p>Clouds: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            })
            .catch(error => {
                console.error("Error fetching weather:", error);
                weatherDisplay.innerHTML = <p style="color:red;">Could not find weather for "${city}".</p>;
            });
    }

    weatherForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let city = cityInfoInput.value.trim();
        fetchWeather(city);
        cityInfoInput.value = "";
    });

    if (gunturCitiesList) {
        gunturCitiesList.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI' && e.target.dataset.city) {
                const cityName = e.target.dataset.city;
                cityInfoInput.value = cityName;
                fetchWeather(cityName);
            }
        });
    }
});
