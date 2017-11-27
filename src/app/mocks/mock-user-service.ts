//import {AuthenticationService} from '../services'
export class MockUserService  {

        private user = {firstname: 'jim', lastName: 'hawkins', email: "email@email.com" };


        initUser() {
            return new Promise((resolve, reject) => {
                    resolve(this.user);
            });
        }
}
