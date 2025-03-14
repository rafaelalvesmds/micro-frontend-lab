import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'ecobit', loadComponent: () => {
            return loadRemoteModule('ecobit', './Component')
                .then(m => m.AppComponent);
        }
    },
    {
        path: 'nexum', loadComponent: () => {
            return loadRemoteModule('nexum', './Component')
                .then(m => m.AppComponent);
        }
    },
    {
        path: 'redflux', loadComponent: () => {
            return loadRemoteModule('redflux', './Component')
                .then(m => m.AppComponent);
        }
    },
    {
        path: 'stratos', loadComponent: () => {
            return loadRemoteModule('stratos', './Component')
                .then(m => m.AppComponent);
        }
    }
];