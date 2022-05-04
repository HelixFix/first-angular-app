import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {
    private users: User[] = [
        {
            firstName      : 'Jérôme',
            lastName       : 'Rinner',
            email          : 'portfolio.9fkib@aleeas.com',
            drinkPreference: 'H2O',
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

/**
 * It takes a user object as an argument, pushes it to the users array, and then emits the users array.
 * @param {User} user - User
 */
    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}