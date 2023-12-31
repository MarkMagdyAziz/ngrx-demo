import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {init} from './ngrx-store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demos-workspace';
  constructor(private store:Store){

  }
  ngOnInit(): void {
    this.store.dispatch(init())
  }
}
