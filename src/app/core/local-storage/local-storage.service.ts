import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    hasToken(key) {
        return !!this.getToken(key);
    }

    setToken(token, key) {
        window.localStorage.setItem(key, token);
    }

    getToken(key) {
        return window.localStorage.getItem(key);
    }

    removeToken(key) {
        window.localStorage.removeItem(key);
    }

}