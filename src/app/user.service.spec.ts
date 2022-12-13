import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { UserService } from "./user.service";

const mockUser = {
    "id": "f32338b5-dba5-451f-a719-1e48c04dcfb2",
    "prefix": "Mr.",
    "firstname": "Oliver",
    "lastname": "Schuppe",
    "username": "Oliver77",
    "gender": "male",
    "email": "Oliver.Schuppe@hotmail.com",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/757.jpg",
    "position": "Human Communications Analyst",
    "birthdate": new Date("1951-11-17T23:23:35.225Z"),
    "phone": "551-968-364",
    "cell": "604-517-551",
    "location": {
      "street": "2223 Hirthe Centers Suite 490",
      "city": "Monroe",
      "country": "Austria"
    },
    "born": "SL"
  };

describe('UserService', () => {
    let service: UserService;
    let mockHttpService: jasmine.SpyObj<any>;

    beforeEach(() => {
        mockHttpService = jasmine.createSpyObj('HttpClient', ['get']);

        TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useValue: mockHttpService }
            ]
        });
        service = TestBed.inject(UserService);
    })

    it('should retreive a user', () => {
        mockHttpService.get.and.returnValue(of(mockUser));

        service.getUserById('test-this-id').subscribe();

        expect(mockHttpService.get).toHaveBeenCalledOnceWith('http://localhost:3000/users/test-this-id')
    })


});