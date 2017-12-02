import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DoctorService } from '../../services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public doctors: Array<any> = [];
    public sliders: Array<any> = [];
    public filtered: Array<any> = [];
    public nameSearch: String  = '';
    public specSearch: String  = '';
    public zipSearch: String  = '';
    public serviceSearch: String  = '';

    constructor(private doctorService: DoctorService) {
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });

        this.doctorService.getAllDoctors()
            .then( (data: any) => {
                this.filtered = data.doctor;
                console.log(data);
            });
    }

    ngOnInit() {
    }
}
