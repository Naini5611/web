import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(
    private service: HttpService
  ) { }

  ngOnInit() {
    this.getAuthors()
  }

  getAuthors() {
    this.service.getAuthors().subscribe((res: any) => {
      console.log("🚀 ~ file: author.component.ts:20 ~ AuthorComponent ~ this.service.getAuthors ~ res:", res)
      
    })
  }

}
