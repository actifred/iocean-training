import { NgModule } from "@angular/core";
import { PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes } from "@angular/router";
import { Observable, of } from "rxjs";
import { CalculetteComponent } from "./calculette/calculette.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SplashComponent } from "./splash/splash.component";

class CustomPreload implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return route.data?.['preload'] ? fn() : of(null)
    }
}

const routes: Routes = [
    {
        path: 'calculette',
        component: CalculetteComponent
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'users',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        data: { preload: false }
    },
    {
        path: '',
        pathMatch: "full",
        component: SplashComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: CustomPreload })
    ],
    providers: [ CustomPreload ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}