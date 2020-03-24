import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notas } from './notas.model';
import { NotaService } from './nota.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { AddNotaComponent } from '../add-nota/add-nota.component';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit, OnDestroy {
  notas: Notas[] = [];
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
    .subscribe((note: Notas[]) => {
      this.notas = note;
    });
  }
  addNote() {
    this.mdl.create({component: AddNotaComponent,
    })
    .then(mdlEl => {
      mdlEl.present();
      return mdlEl.dismiss();
    }).then(res => console.log('r', res));
  }
  ngOnDestroy() {
    this.notasS.unsubscribe();
  }
}
