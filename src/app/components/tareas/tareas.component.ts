import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = []
  nombreTarea =  '';

  constructor() { }

  ngOnInit(): void {
  }

  // Agregamos metodo
  agregarTarea(){
    //console.log(this.nombreTarea);
    
    //Creamos un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    // Agregamos el objeto tarea al Array
    this.listaTareas.push(tarea)

    // Resetear el input
    this.nombreTarea = '';
  }

  // Metodo eliminar Tarea
  eliminarTarea(index: number): void{
    this.listaTareas.splice(index, 1);
  }

  // Metodo Atualizar tarea
  actualizarTarea(index: number, tarea: Tarea): void{
    this.listaTareas[index].estado = !tarea.estado;
  }

}
