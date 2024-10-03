import {DateTime} from "luxon"
const API_KEY = "32da594df7785afed55ff668e3ec4c69";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(`${BASE_URL}${infoType}`);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching ${infoType} data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch ${infoType}:`, error);
    return null;
  }
};
  const formatToLocalTime = (
    secs, 
    // offset, 
    zone,
    format="cccc, dd LLL yyyy' | Local time: 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
const formatCurrent = (data) => {
    const {coord:{lat, lon}, 
    main:{temp, feels_like, temp_min, temp_max, humidity},
    name, 
    dt,
    sys:{country,sunrise, sunset},
    weather,
    wind:{speed},
    timezone,
} = data;
const {main: details,icon}= weather[0]
// const formattedLocalTime= formatToLocalTime(dt, timezone)
return{temp, 
    feels_like, 
    temp_min, 
    temp_max, 
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise,timezone,'hh:mm a'),
    sunset: formatToLocalTime(sunset,timezone,'hh:mm a'),
    speed,
    details,
    icon: `http://openweathermap.org/img/wn/${icon}@2x.png`, // Include icon URL
    formattedLocalTime: formatToLocalTime(dt, timezone),
    lat,
    lon,
    timezone,
    }

}

  const getFormattedWeatherData = async (searchParams) => {
        try {
            // Fetch current weather data
            const currentWeather = await getWeatherData("weather", searchParams);
            if (!currentWeather) return null;
        
            const formattedCurrentWeather = formatCurrent(currentWeather);
            const { lat, lon, timezone } = formattedCurrentWeather;
        
            // Fetch forecast data using the coordinates from the current weather data
            const forecastWeather = await getWeatherData("forecast", {
              lat,
              lon,
              units: searchParams.units,
            });
        
            // Combine the data if available, otherwise return an empty object
            return { ...formattedCurrentWeather, forecast: forecastWeather?.list || [] };
          } catch (error) {
            console.error("Error in getFormattedWeatherData:", error);
            return null;
          }
        };
    
    export default getFormattedWeatherData