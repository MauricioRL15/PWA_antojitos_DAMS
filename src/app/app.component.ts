import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  names=[
    'Anuel',
    'Crishoforo',
    'Panchito',
    'Dante',
    'Sandrito'
  ];

  person = {
    name: 'Juan',
    lastname: 'Pérez Gonzalez',
    age: 28
  };
  title = 'Mi primer aplicación web con Angular';
  name = 'Mauricio';
  age = 20;
  urlImage = 'https://p4.wallpaperbetter.com/wallpaper/829/979/621/inkshadow-league-of-legends-league-of-legends-digital-art-riot-games-gzg-hd-wallpaper-preview.jpg';
  urlImage2 = 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt64c1562924faa4cc/5efcdb24b2975d3d706ad58e/06_SB-Lillia-Splash.jpg';

  incAge(){
    this.person.age ++;
  };

  nombress = '';
  agregar(){
    this.names.push(this.nombress);
    this.nombress= '';
  };

  removeItem(index: number) {
    this.names.splice(index, 1);
  }



}
