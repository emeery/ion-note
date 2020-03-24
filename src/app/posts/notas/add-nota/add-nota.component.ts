import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotaService } from '../notass/nota.service';

@Component({
  selector: 'app-add-nota',
  templateUrl: './add-nota.component.html',
  styleUrls: ['./add-nota.component.scss'],
})
export class AddNotaComponent implements OnInit {
  form: FormGroup;
  constructor(
    private mdl: ModalController,
    public noteService: NotaService
    ) { }

  ngOnInit() {
    this.setForm();
  }
  setForm() {
    this.form = new FormGroup({
        titulo: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required,  Validators.minLength(1)]
        }),
        descripcion: new FormControl(null, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
    });
  }
  addNote() {
    this.noteService.addNote(
      this.form.value.titulo,
      this.form.value.descripcion
    );
    this.onClose();
  }
  onClose() {
    this.mdl.dismiss();
  }
}
