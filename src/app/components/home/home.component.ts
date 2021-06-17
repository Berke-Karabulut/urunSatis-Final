import { Sonuc } from './../../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { myAlertService } from 'src/app/services/myAlert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public alert:myAlertService
  ) { }

  ngOnInit() {
  }

  AlertAc(p:boolean){
    var s:Sonuc=new Sonuc();
    s.islem= p;
    s.mesaj=" Bu alert test mesajıdır."

    this.alert.AlertUygula(s);
  }

}
