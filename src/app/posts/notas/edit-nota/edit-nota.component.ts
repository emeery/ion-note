import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotaService } from '../notass/nota.service';
import { ModalController } from '@ionic/angular';
import { Nota } from '../notass/notas.model';
@Component({
  selector: 'app-edit-nota',
  templateUrl: './edit-nota.component.html',
  styleUrls: ['./edit-nota.component.scss'],
})
export class EditNotaComponent implements OnInit {
  @Input() notaId: string;
  form: FormGroup;
  constructor(
    public noteService: NotaService,
    private mdl: ModalController
  ) { }

  ngOnInit() {
    this.setForm();
    this.getNote();
  }
  setForm() {
    this.form = new FormGroup({
      titulo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      descripcion: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }
  getNote() {
     this.noteService.getNote(this.notaId)
     .subscribe(res => {
      this.form.setValue({
        titulo: res.titulo,
        descripcion: res.descripcion
      });
     });
  }
  updateNote() {
    console.log('t', this.form.value.titulo);
    this.noteService.updateNote(
      this.notaId,
      this.form.value.titulo,
      this.form.value.descripcion
    );
    this.mdl.dismiss();
  }
  onClose() {
    this.mdl.dismiss();
  }
}
