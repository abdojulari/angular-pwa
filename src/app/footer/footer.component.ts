import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  currentYear = new Date().getFullYear();
  @Input() title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
