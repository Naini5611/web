import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { IAuthor } from '../../interface/author.interface';
import { IInstitucion } from '../../interface/institution.interface';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'direccion', 'modificado', 'institucion'];

  dataSource: IAuthor[] = [];
  institutions: IInstitucion[] = [];

  option: string = 'list'

  nombre: string = '';
  apellido: string = '';
  direccion: string = '';
  idInstitucion: number | null = null;

  constructor(
    private service: HttpService
  ) { }

  ngOnInit() {
    this.getAuthors()
    this.getInstitutions()
  }

  getAuthors() {
    this.service.getAuthors().subscribe((res: IAuthor[]) => {
      console.log("🚀 ~ file: author.component.ts:33 ~ AuthorComponent ~ this.service.getAuthors ~ res:", res)
      this.dataSource = res;
    })
  }

  getInstitutions() {
    this.service.getInstitutions().subscribe((res: IInstitucion[]) => {
      console.log("🚀 ~ file: author.component.ts:38 ~ AuthorComponent ~ this.service.getInstitutions ~ res:", res)
      this.institutions = res;
      this.option = 'list';

    })
  }

  guardarAutor() {
    // Aquí puedes acceder a los valores de los campos
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Dirección:', this.direccion);
    console.log('ID de Institución:', this.idInstitucion);

    if (!this.nombre || !this.apellido || !this.direccion || !this.idInstitucion) {
      return;
    }

    const newAuthor: IAuthor = {
      nombre: this.nombre,
      apellido: this.apellido,
      direccion: this.direccion,
      idInstitucion: this.idInstitucion,
      activo: true,
      modificado: new Date()
    }

    this.service.postAuthor(newAuthor).subscribe((res) => {
      console.log("🚀 ~ file: author.component.ts:70 ~ AuthorComponent ~ this.service.postAuthor ~ res:", res)
      this.getAuthors()
    })
  }

  addNew() {
    this.option = 'new';

  }

}
