
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
  ,{
    path:'todo',
    loadChildren:()=>{
      return loadRemoteModule({
        remoteEntry:"http://localhost:4202/remoteEntry.js",
        remoteName:"todo",
        exposedModule:'check1'
      }).then(m=>{console.log("tehn",m);return m.TodoModule}).catch(console.log);
    }
  }
  ,{
    path:'todoapp',
    loadComponent:()=>{
      return loadRemoteModule({
        remoteEntry:"http://localhost:4202/remoteEntry.js",
        remoteName:"todo",
        exposedModule:'check2'
      }).then(m=>{console.log("tehn",m);return m.AppComponent}).catch(console.log);
    }
  }
];
