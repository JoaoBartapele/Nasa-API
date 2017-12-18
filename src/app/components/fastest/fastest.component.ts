import { Component, OnInit } from '@angular/core';
import { AsteroidsService } from '../../services/asteroids/asteroids.service';
import { Util } from '../../util';
import { ViewModel } from '../../models/view-model';

@Component({
  selector: 'app-fastest',
  templateUrl: './fastest.component.html',
  styleUrls: ['./fastest.component.css']
})
export class FastestComponent implements OnInit {

  private asteroides: any[];

  constructor(
    private astService: AsteroidsService
  ) { }

  ngOnInit() {
    this.astService.getFastestAsteroids().subscribe((t: Busca) => {
      this.asteroides = Util.dataToModel(t.near_earth_objects);
      this.asteroides.sort((a: ViewModel , b: ViewModel) => {
        return a.velocity - b.velocity;
      }).reverse();
    });
  }

}
