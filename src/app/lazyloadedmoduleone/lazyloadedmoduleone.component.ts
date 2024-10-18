import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyloadedmoduleone',
  templateUrl: './lazyloadedmoduleone.component.html',
  styleUrl: './lazyloadedmoduleone.component.css'
})
export class LazyloadedmoduleoneComponent implements OnInit {
  
  ngOnInit(): void {
    console.log("component load");
  }

}
