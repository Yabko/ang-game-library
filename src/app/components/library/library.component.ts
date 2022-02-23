
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  title: string = "My Games";
  games: Game[] = [];
  library: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
      this.gameService.getGames().subscribe((games) => this.games = games);
  }

}
