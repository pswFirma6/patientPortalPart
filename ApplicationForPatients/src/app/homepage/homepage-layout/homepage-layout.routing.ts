import { Routes } from "@angular/router";
import { FeedbackComponent } from "../feedback/feedback.component";
import { ViewfeedbackComponent } from "../viewfeedback/viewfeedback.component";

export const HomepageLayoutRoutes: Routes = [
    { path: 'givefeedback', component: FeedbackComponent},
    { path: 'viewfeedback', component: ViewfeedbackComponent }
]