import { UrunDialogComponent } from './components/dialogs/urun-dialog/urun-dialog.component';
import { AdminUrunlerComponent } from './components/admin/admin-urunler/admin-urunler.component';
import { UrunlerComponent } from './components/urunler/urunler.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { myAlertService } from './services/myAlert.service';
import { HttpClientModule } from '@angular/common/http';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    UrunlerComponent,
    KategorilerComponent,

    //Admin
    AdminUrunlerComponent,

    //Dialoglar
    AlertDialogComponent,
    ConfirmDialogComponent,
    UrunDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  entryComponents:[
    AlertDialogComponent,
    ConfirmDialogComponent,
    UrunDialogComponent
  ],
  providers: [myAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
