/**
 * Created by Yaroslav on 28.12.2016.
 */
import  config from '../config';

export default class LS {
    static  get(field) {
        if (LS._isExist()) {
            const data = JSON.parse(localStorage.getItem(config.localStorage.name));
            if(!field) {
                return data;
            }
            if(data[field]) {
                return data[field];
            }
            return undefined;
        }
        return undefined;
            }
    static set(field, data =[]) {
        let dataStorage = [];
        if(field) {
            dataStorage = LS.get();
            if(!dataStorage) dataStorage= {};
            dataStorage[field] = data;
        } else  {
            dataStorage = data;
        }

        localStorage.setItem(config.localStorage.name, JSON.stringify(dataStorage));

    }

    static _isExist() {
        return localStorage.getItem(config.localStorage.name) ? true : false;
    }
}
