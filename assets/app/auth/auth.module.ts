import {NgModule} from "@angular/core";
import {SigninComponent} from "./signin.copmonrnt";
import {SignupComponent} from "./signup.component";
import {LogoutComponent} from "./logout.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {authRouting} from "./auth.routing";

@NgModule({
    declarations: [
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        authRouting
    ]
})
export class AuthModule {

}