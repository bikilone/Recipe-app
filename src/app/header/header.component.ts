import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() onNavigation = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  onNavigationClicked(data: string) {
    this.onNavigation.emit(data);
  }
}
