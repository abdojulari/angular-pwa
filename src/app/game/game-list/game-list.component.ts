import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: any;
  searchTerm = '';
  filteredGames: any = [];
  page: number = 1;
  count: number = 0;
  itemSize: number = 12;
  itemSizes: any = [6, 9, 15, 18]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.gameList()
  }
  
  gameList = () => {
    this.dataService.getAllGames().subscribe(res => {
      this.games = res;
    },
   );
  }

  onDataChange = (event: any) => { 
    this.page = event;
    this.gameList();
  }

  onSizeChange = (event: any): void => {
    this.itemSize = event.target.value;
    this.page = 1;
    this.gameList();
  }

  // handles the search filter for the game list
  search(value: string): void {
    if(!value) {
      this.filteredGames = this.games;
    }
    this.filteredGames = this.games.filter((val: any) =>
      val.title.toLowerCase().includes(value)
    );
 
  }

}
