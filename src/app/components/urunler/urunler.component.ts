import { ApiService } from './../../services/api.service';
import { Urunler } from './../../models/urunler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.css']
})
export class UrunlerComponent implements OnInit {
Urunler: Urunler[];
displayedColumns=['urunAdı', 'urunFiyatı', 'urunKatId', 'urunKatAdı' ,'islemler'];
dataSource: any;
  constructor(
    public apiServis: ApiService

  ) { }

  ngOnInit() {
  }

 

}
