import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service"

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  sesionState = this.authService.isLoged();

}
