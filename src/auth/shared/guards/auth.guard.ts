import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { CanActivate,Router  } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private router:Router,
        private authservice:AuthService
    ) {

    }

    canActivate(){ 

        return this.authservice.authState
        .map((user)=>{
          if(!user){
              this.router.navigate(['/auth/login']);
          }

          return !!user;
        });
    }
}