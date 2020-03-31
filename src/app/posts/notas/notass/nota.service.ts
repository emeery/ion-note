import { Injectable } from '@angular/core';
import { Nota } from './notas.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private notas: Nota[] = [];
  private notasListen = new Subject<Nota[]>();
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
    const notaData: Nota = {id: null, titulo: t, descripcion: d};
    this.http.post('http://localhost:8090/note', notaData)
    .subscribe(res => this.getNotes());
  }
  getNote(ide: string) {
    return this.http.get<{_id: string, titulo: string, descripcion: string}>(
      'http://localhost:8090/note/' + ide)
    .pipe(map(res => {
      return res;
    }));
  }
  updateNote(id: string, titulo: string, descripcion: string) {
    const nota: Nota = {id, titulo, descripcion };
    this.http.put('http://localhost:8090/note/' + id, nota)
    .subscribe(res => this.getNotes());
  }
  deleteNote(id: string) {
    return this.http.delete<{mensaje: string}>(
      'http://localhost:8090/note/' + id);
  }
  getNoteListener() {
    return this.notasListen.asObservable();
  }

}
