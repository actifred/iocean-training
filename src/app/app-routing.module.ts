import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserSimpleListComponent } from "./user-simple-list/user-simple-list.component";

const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'list',
        component: UserSimpleListComponent
    },
    {
        path: 'users/:id',
        component: UserDetailsComponent
    },
    {
        path: '',
        pathMatch: "full",
        redirectTo: 'users'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes), // , { enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}