import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {
    private users: User[] = [
        {
            firstName      : 'Jérôme',
            lastName       : 'Rinner',
            email          : 'portfolio.9fkib@aleeas.com',
            drinkPreference: 'Water',
            hobbies        : [
                'coder',
                'la dégustation de café'
            ]
        }
    ];
            userSubject   = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}