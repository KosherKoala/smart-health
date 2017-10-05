import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() name: string;
    @Input() specialty: string;
    @Input() address: string;
    @Output() event: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {}
}
