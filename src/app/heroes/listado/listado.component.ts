import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iron-man','Hulk','Thor'];

  borrado:string='';

  borrarHeroe(){
      this.borrado = this.heroes.pop() || '';
  } 
  
}
