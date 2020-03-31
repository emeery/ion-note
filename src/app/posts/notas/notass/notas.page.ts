import { Component, OnInit, OnDestroy } from '@angular/core';
import { Nota } from './notas.model';
import { NotaService } from './nota.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { AddNotaComponent } from '../add-nota/add-nota.component';
import { EditNotaComponent } from '../edit-nota/edit-nota.component';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit, OnDestroy {
  notas: Nota[] = [];
  private notasS: Subscription;
  constructor(
    public noteService: NotaService,
    private mdl: ModalController
    ) { }

  ngOnInit() {
    this.getNotes();
  }
  getNotes() {
    this.noteService.getNotes();
    this.notasS = this.noteService.getNoteListener()
    .subscribe((note: Nota[]) => {
      this.notas = note;
    });
  }
  addNote() {
    this.mdl.create({component: AddNotaComponent})
    .then(mdlEl => {
      mdlEl.present();
      return mdlEl.dismiss();
    }).then(res => console.log('r', res));
  }
  editNote(id: string) {
    this.mdl.create({
      component: EditNotaComponent,
      componentProps: {notaId: id}
    })
    .then(mdlC => {
      mdlC.present();
      return mdlC.dismiss();
    }).then(res => console.log('r', res));
  }
  onDelete(noteid: string) {
    this.noteService.deleteNote(noteid)
    .subscribe(() => { this.getNotes(); });
  }
  ngOnDestroy() {
    this.notasS.unsubscribe();
  }
}
