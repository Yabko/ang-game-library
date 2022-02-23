import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  title: string = "Games";
  searchString!: string;
  games: Game[] = [];
  filteredGames: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.games = games.filter((i) => i.purchased === false);
      this.searchGames(this.searchString);
    });
  }

  addToLibrary(game: Game) {
    game.purchased = true;
    this.gameService.addGameToLibrary(game).subscribe();
  }

  searchGames(searchStr: string) {

    console.log('search resp', searchStr);

    this.searchString = searchStr;
    if (!this.games) {
      this.filteredGames = this.games;
    } else if (!searchStr) {
       this.filteredGames = this.games;
    } else {
      const searchText = searchStr.toLocaleLowerCase();
      const searchFields = ['name', 'description'];
      this.filteredGames = this.games.filter(it =>
      {
        return (it.name.toLowerCase().includes(searchText) ||
          it.description.toLocaleLowerCase().includes(searchText) ||
         it.price.toString().includes(searchText));
      })
       
    }
  }

}
