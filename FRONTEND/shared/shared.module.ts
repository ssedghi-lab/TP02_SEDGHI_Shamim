import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importe CommonModule, nécessaire pour les directives communes comme ngIf, ngFor, etc.

@NgModule({
  imports: [
    CommonModule  // Importe les fonctionnalités de base d'Angular dans le module
  ],
  declarations: [
    // Liste des composants, directives, pipes que vous voulez déclarer dans ce module
  ],
  exports: [
    // Liste des composants, directives, pipes que vous souhaitez réutiliser ailleurs dans l'application
  ]
})
export class SharedModule { }
