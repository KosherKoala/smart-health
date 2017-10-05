import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public doctors: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
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

        this.doctors.push({
            id: 1,
            name: 'Dr Rufus Mandude',
            specialty: "Dentist",
            address: "1221 Foggy Dr, Suite 300, 32746"
        }, {
            id: 2,
            name: 'Dr Tommy Gill',
            specialty: "Plastic Surgeon",
            address: "1223 Foggy Cir, Suite 2, 32746"
        },{
            id: 3,
            name: 'Dr Lila Hunt',
            specialty: "General Practice",
            address: "341 Fist St,  22546"
        },{
            id: 4,
            name: 'Dr Curt Russel',
            specialty: "Orthodontist",
            address: "1221 Teeth Rd, Suite 300, 64857"
        },{
            id: 5,
            name: "Dr Sara O'Mally",
            specialty: "Gynocologist",
            address: "777 Turnpike Dr,  81142"
        });
    }

    ngOnInit() {
    }
}
