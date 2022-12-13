import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
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
    let testController: HttpTestingController;

    beforeEach(() => {
        mockHttpService = jasmine.createSpyObj('HttpClient', ['get']);

        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [
                //{ provide: HttpClient, useValue: mockHttpService }
            ]
        });
        testController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(UserService);
    })

    // Test with the jasmine mock => disabled
    xit('should retreive a user', () => {
        mockHttpService.get.and.returnValue(of(mockUser));

        service.getUserById('test-this-id').subscribe();

        expect(mockHttpService.get).toHaveBeenCalledOnceWith('http://localhost:3000/users/test-this-id')
    })

    it('should retreive a user', () => {
        service.getUserById('test-this-id').subscribe();

        const req = testController.expectOne('http://localhost:3000/users/test-this-id');
        req.flush(mockUser);
        expect(req.request.method).toBe('GET');
        testController.verify();
    })

});