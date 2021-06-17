import { AdminUrunlerComponent } from './components/admin/admin-urunler/admin-urunler.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'urunler',
    component: UrunlerComponent
  },

  {
    path: 'kategoriler',
    component: KategorilerComponent
  },
  {
    path: 'admin-urunler',
    component: AdminUrunlerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
