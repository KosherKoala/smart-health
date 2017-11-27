import {DoctorService} from '../services'
export class MockDoctorService extends DoctorService {

        private doctors = [{firstname: 'jim', lastName: 'hawkins', address: {} },
                           {firstname: 'jim', lastName: 'hawkins', address: {} }];


        getAllDoctors() {
            return new Promise((resolve, reject) => {
                    resolve(this.doctors);
            });
        }

        getDoctorById(id) {
            return new Promise((resolve, reject) => {
                    resolve(this.doctors[1]);
            });
        }

        createDoctor(data) {
            return new Promise((resolve, reject) => {
                this.doctors.push({firstname: 'new', lastName: 'doc', address: {} })
                resolve(true);
            });
        }
        updateDoctor(id, data) {
            return new Promise((resolve, reject) => {
                this.doctors[0].firstname = 'duh';
                resolve(true);
            });
        }

        deleteDoctor(id) {
            return new Promise((resolve, reject) => {
                this.doctors = this.doctors.splice(0, 1);
                resolve(true);
            });
        }
}
