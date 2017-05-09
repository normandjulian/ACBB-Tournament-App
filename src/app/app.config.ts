import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface IAppConfig {
    apiEndpoint: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: 'http://149.202.129.70:8080/api/'
    // apiEndpoint: 'http://127.0.0.1:8080/api/'
};