import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyMatchComponent} from '../presentation/event/my-match/my-match.component';

const routes: Routes = [
  {path: 'home', component: MyMatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
