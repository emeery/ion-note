import { Injectable } from '@angular/core';
import { Notas } from './notas.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private notas: Notas[] = [];
  private notasListen = new Subject<Notas[]>();
  constructor(private http: HttpClient) {}
  getNotes() {
    this.http.get<{mensaje: string; notas: any}>(
      'http://localhost:8090/note')
    .pipe(
      map((res) => {
        console.log('r', res);
        return res.notas.map(t => {
          return {
              id: t._id,
              titulo: t.titulo,
              descripcion: t.descripcion,
          };
        });
      })
    )
    .subscribe(twtD => {
      this.notas = twtD;
      this.notasListen.next([...this.notas]);
    });
  }
  addNote(t: string, d: string) {
    const notaData: Notas = {id: null, titulo: t, descripcion: d};
    this.http.post('http://localhost:8090/note', notaData)
    .subscribe(res => this.getNotes());
  }
  getNoteListener() {
    return this.notasListen.asObservable();
  }
}
