import { Kategoriler } from './../models/kategoriler';
import { Urunler } from './../models/urunler';
import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl = "https://localhost:44351/api";
constructor(
  public http: HttpClient
) { }

urunListele() {
  return this.http.get(this.apiUrl + "urunlistele");
}

urunListelebyKatId(katId: number){
  return this.http.get(this.apiUrl + "urunlistelebykatid/" + katId);
}

urunById(urunId: string) {
  return this.http.get(this.apiUrl + "urunbyid/" + urunId);
}
urunEkle(urun: Urunler) {
  return this.http.post(this.apiUrl + "urunekle", urun);
}
urunDuzenle(urun: Urunler) {
  return this.http.put(this.apiUrl + "urunduzenle", urun);
}
urunSil(urunId: string) {
  return this.http.delete(this.apiUrl + "urunsil/" + urunId);
}

// Kategoriler 
KategoriListe() {
  return this.http.get(this.apiUrl + "kategoriliste");
}
KategoriById(kategoriId: number) {
  return this.http.get(this.apiUrl + "kategoribyid/" + kategoriId);
}
KategoriEkle(kat: Kategoriler) {
  return this.http.post(this.apiUrl + "kategoriekle", kat);
}
KategoriDuzenle(kat: Kategoriler) {
  return this.http.put(this.apiUrl + "kategoriduzenle", kat);
}
KategoriSil(katId: number) {
  return this.http.delete(this.apiUrl + "kategorisil/" + katId);
}

//Sepet
/*
OgrenciDersListe(ogrId: string) {
  return this.http.get(this.apiUrl + "ogrencidersliste/" + ogrId);
}
DersOgrenciListe(dersId: string) {
  return this.http.get(this.apiUrl + "dersogrenciliste/" + dersId);
}
KayitEkle(kayit: Kayit) {
  return this.http.post(this.apiUrl + "kayitekle", kayit);
}
KayitSil(kayitId: string) {
  return this.http.delete(this.apiUrl + "kayitsil/" + kayitId);
}
*/


}
