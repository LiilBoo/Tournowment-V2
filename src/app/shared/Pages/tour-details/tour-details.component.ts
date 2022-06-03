import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { ITourDetails } from 'src/app/Models/itour-details';
import { TournamentService } from 'src/app/Services/tournament.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit {

  public tour!: ITourDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tourService: TournamentService,
) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.tourService.getTourDetailsWithId(param['id']).pipe( 
        first() 
        ).subscribe((tour: ITourDetails) => {
        // populate properties
        // & templates with the retrieved : tour
        // this.tour = tour;
      })
    })
  }

}
