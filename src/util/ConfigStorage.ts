import { Config } from "./Config";

export class ConfigStorage {
    private static configStoragePrefix = "ConfigStorageItem: ";

    static isSupported(): boolean {
        try {
            let itemBackup = localStorage.getItem("");
            localStorage.removeItem("");
            localStorage.setItem("", itemBackup);
            if (itemBackup === null) 
                localStorage.removeItem("");
            else 
                localStorage.setItem("", itemBackup);
            return true;
        } catch (e) {
            return false;
        }
    }

    static getConfigs(): Config[] {
        let items = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);

            if (key.startsWith(this.configStoragePrefix)) {
                let data = localStorage.getItem(key);
                let item = JSON.parse(data);
                if (item != null) {
                    items.push(item);
                }
            }
        }

        return items;
    }

    static saveConfig(name: string, item: Config) {
        localStorage.setItem(this.configStoragePrefix + name, JSON.stringify(item));
    }
}