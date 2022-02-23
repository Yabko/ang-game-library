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
  indieChecked: boolean = false;
  actionChecked: boolean = false;
  adventureChecked: boolean = false;

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
    this.searchString = searchStr;
    this.filteredGames = this.searchByStr(this.games, searchStr);
    this.filteredGames = this.searchByTags(this.filteredGames);
  }

  searchByStr(games: Game[], searchStr: string) {
    if (!games || !searchStr) {
      return games;
    }

    const searchText = searchStr.toLocaleLowerCase();
    return games.filter(it => {
      return (it.name.toLowerCase().includes(searchText) ||
        it.description.toLocaleLowerCase().includes(searchText) ||
        it.price.toString().includes(searchText));
    })
  }

  searchByTags(games: Game[]) {
    const set = new Set<string>();
    if (this.indieChecked) {
      set.add("indie")
    }
    if (this.actionChecked) {
      set.add("action")
    }
    if (this.adventureChecked) {
      set.add("adventure")
    }
    if (set.size === 0 || set.size === 3) {
      return games;
    }
    return games.filter((it) => set.has(it.tag))
  }

}
