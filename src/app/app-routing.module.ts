import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculetteComponent } from "./calculette/calculette.component";
import { SplashComponent } from "./splash/splash.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserSimpleListComponent } from "./user/user-simple-list/user-simple-list.component";
import { UserComponent } from "./user/user/user.component";

const routes: Routes = [
    {
        path: 'calculette',
        component: CalculetteComponent
    },
    {
        path: 'users',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    },
    {
        path: '',
        pathMatch: "full",
        component: SplashComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}