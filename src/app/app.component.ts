import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'AngularOutputChallenge';
  public onomatopoeias: string[] = new Array<string>();

  onReceiveNewOnomatopia($event:string){
    this.onomatopoeias.push($event);

  }

  ngOnInit(): void {
    this.onomatopoeias.push("ENFIN !");
  }
}