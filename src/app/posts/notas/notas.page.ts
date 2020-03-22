import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notas } from './notas.model';
import { NotaService } from './nota.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit, OnDestroy {
  notas: Notas[] = [];
  private notasS: Subscription;
  constructor(public noteService: NotaService) { }

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
  ngOnDestroy() {
    this.notasS.unsubscribe();
  }
}
