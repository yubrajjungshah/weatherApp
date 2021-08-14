import API from './api.js';
import NoData from './noData.js';
class WeatherApp {
    rootElement;

    static render(data, systemUsed){
        if(!data) {
            console,log('No data');
        }
        else {
            console.log({data});
        }
    }
    static init(selector) {
        try {
            this.rootElement = document.querySelector(selector);
            if(!this.rootElement) throw `Could not find the element with ${selector}`;

            const defaultCity = 'Sydney';
            API.getWeatherData(defaultCity)
                .then(data => {
                    console.log(data);
                });

        }
        catch (error){
            console.log(error);
        }
    }
}
export default WeatherApp;