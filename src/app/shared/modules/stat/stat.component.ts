import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() firstName: string;
    @Input() lastName: string;
    @Input() specialty: string;
    @Input() address: any;
    @Input() showAddress: Boolean;
    @Input() isPatient: Boolean;
    @Output() event: EventEmitter<any> = new EventEmitter();


    constructor() { }

    ngOnInit() {}
}
