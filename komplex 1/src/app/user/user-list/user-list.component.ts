import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  displayedColumns: string[] = ['nev', 'kor', 'szhely', 'password', 'username','_id','__v'];
  dataSource: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.http.get<any[]>('http://127.0.0.1:3000/api/v1/users').subscribe({
      next: (data: any[]) => this.dataSource = data,
      error: (err) => console.log(err)
    })
  }
}
