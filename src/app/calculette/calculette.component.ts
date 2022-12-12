import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { combineLatest, debounceTime, map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  mensualite$ !: Observable<number>;

  private _taux$ = new Subject<number>();
  private _duree$ = new Subject<number>();
  private _capital$ = new Subject<number>();

  constructor() {
    this.mensualite$ = 
      combineLatest([this._capital$, this._taux$, this._duree$])
        .pipe(
          debounceTime(500),
          map(
          ([capital, taux, duree]) => this.formuleMensualite(capital, taux, duree)
        ))
  }

  formuleMensualite(c: number, t:number, d:number): number {
    return (c * t * Math.pow((1+t), d)) / (Math.pow((1+t), d) + 1)
  }

  ngOnInit(): void {
  }

  capitalChanged(event: Event) {
    this._capital$.next(parseFloat((event.target as any).value))
  }

  tauxChanged(event: Event) {
    this._taux$.next(parseFloat((event.target as any).value))
  }

  dureeChanged(event: Event) {
    this._duree$.next(parseFloat((event.target as any).value))
  }

}
