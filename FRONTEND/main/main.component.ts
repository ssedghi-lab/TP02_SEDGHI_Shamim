import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  client = {
    civilite: '', nom: '', prenom: '', adresse: '', cp: '', ville: '',
    pays: '', tel: '', email: '', login: '', password: ''
  };
  formSubmitted = false;
  errors = {}; 
  
  onSubmit() {
    if (this.isValidForm()) {
      this.formSubmitted = true;
    } else {
      this.errors = {
        message: "Veuillez remplir tous les champs requis correctement."
      };
    }
  }

  isValidForm() {
    return this.client.nom.trim() && this.client.email.trim(); 
  }

  resetForm() {
    this.client = {
      civilite: '', nom: '', prenom: '', adresse: '', cp: '', ville: '',
      pays: '', tel: '', email: '', login: '', password: ''
    };
    this.formSubmitted = false;
    this.errors = {}; 
  }
}
