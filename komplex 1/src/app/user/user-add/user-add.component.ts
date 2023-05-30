import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  // user objektum inicializálása üres értékekkel
  user: User = {
    id:'',
    nev:'',
    userName:'',
    password:'',
    szhely:''
  };

  // submitted változó inicializálása hamis értékkel
  submitted = false;

  constructor(private apiService: ApiService) { }

  // A tutoriál mentését végző függvény
  saveuser(): void {
    // Adatok összeállítása az űrlap mezőiből
    const data = {
      title: this.user.nev,
      description: this.user.szhely
    };

    // userService segítségével a userService.create metódust hívjuk meg, hogy létrehozzunk egy új tutoriált
    // Az Observable-t visszaadó create metódusra feliratkozunk a subscribe() segítségével
    // Ha a kérés sikeres, a next callback függvény fut le, és a választ kiírjuk a konzolra
    // Ha hiba történik a kérés során, az error callback függvény fut le, és a hibát kiírjuk a konzolra
    this.apiService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  // Az űrlapban megadott adatok törlése és a submitted változó visszaállítása
  newuser(): void {
    this.submitted = false;
    this.user = {
      id:'',
      nev:'',
      userName:'',
      password:'',
      szhely:''
    };
  }

}
