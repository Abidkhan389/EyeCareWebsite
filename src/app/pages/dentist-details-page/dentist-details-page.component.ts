import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DOCTOR_DATA, DoctorDetails } from '../../common/doctor-data';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dentist-details-page',
    imports: [RouterLink,CommonModule],
    templateUrl: './dentist-details-page.component.html',
    styleUrls: ['./dentist-details-page.component.scss']
})
export class DentistDetailsPageComponent implements OnInit {
    doctorName: string = '';
    doctorDetails?: DoctorDetails;
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.doctorName = params['name'] || '';
        this.getDoctorDetails(this.doctorName);
      });
    }
    getDoctorDetails(name: string) {
      this.doctorDetails = DOCTOR_DATA.find(doc => doc.name === name);
      debugger;
    }
}