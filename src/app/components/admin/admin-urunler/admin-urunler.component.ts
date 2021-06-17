import { Sonuc } from './../../../models/sonuc';
import { UrunDialogComponent } from './../../dialogs/urun-dialog/urun-dialog.component';
import { ConfirmDialogComponent } from './../../dialogs/confirm-dialog/confirm-dialog.component';
import { ApiService } from './../../../services/api.service';
import { Urunler } from './../../../models/urunler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { myAlertService } from 'src/app/services/myAlert.service';

@Component({
  selector: 'app-admin-urunler',
  templateUrl: './admin-urunler.component.html',
  styleUrls: ['./admin-urunler.component.css']
})
export class AdminUrunlerComponent implements OnInit {
urunler : Urunler[];
displayedColumns=['urunId','urunAdı', 'urunFiyatı', 'urunKatId', 'urunKatAdı' ,'islemler'];
dataSource: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dialogRef: MatDialogRef<UrunDialogComponent>;
  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;

  constructor(
    public apiservis: ApiService,
    public matDialog: MatDialog, 
    public alert: myAlertService,
  ) { }

  ngOnInit() {
    this.urunListele();
  }

  urunListele() {
    this.apiservis.urunListele().subscribe((d: Urunler[]) => {
      this.urunler = d;
      this.dataSource = new MatTableDataSource(this.urunler);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  Filtrele(e) {
    var deger = e.target.value;
    this.dataSource.filter = deger.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();

    }
  }

  Ekle() {
    var yeniKayit: Urunler = new Urunler();
    this.dialogRef = this.matDialog.open(UrunDialogComponent, {
      width: '400px',
      data: {
        kayit: yeniKayit,
        islem: 'ekle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d => {
      if (d) {
        this.apiservis.urunEkle(d).subscribe((s: Sonuc) => {
          this.alert.AlertUygula(s);
          if (s.islem) {
            this.urunListele();
          }
        });
      }
    });

  }

  Duzenle(kayit: Urunler) {
    this.dialogRef = this.matDialog.open(UrunDialogComponent, {
      width: '400px',
      data: {
        kayit: kayit,
        islem: 'duzenle'
      }
    });
    this.dialogRef.afterClosed().subscribe(d => {
      if (d) {
        kayit.urunAdı = d.urunAdı;
        kayit.urunFiyatı = d.urunFiyatı;
        kayit.urunKatAdı = d.urunKatAdı;

        this.apiservis.urunDuzenle(kayit).subscribe((s: Sonuc) => {
          this.alert.AlertUygula(s);
        });
      }
    });
  }

  Sil(kayit: Urunler) {
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: '500px'
    });
    this.confirmDialogRef.componentInstance.dialogMesaj = kayit.urunAdı + " Adlı ürün silincektir. Onaylıyor musunuz?"

    this.confirmDialogRef.afterClosed().subscribe(d => {
      if (d) {
        this.apiservis.urunSil(kayit.urunId).subscribe((s: Sonuc) => {
          this.alert.AlertUygula(s);
          if (s.islem) {
            this.urunListele();
          }
        });
      }
    });
  }
  

}
