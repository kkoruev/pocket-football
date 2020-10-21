import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyMatchComponent} from '../presentation/event/my-match/my-match.component';
import {ProfileComponent} from '../presentation/user/profile/profile.component';
import {HomeComponent} from '../presentation/user/home/home.component';

const routes: Routes = [
  {path: 'matches', component: MyMatchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
