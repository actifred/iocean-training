import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { UserService } from "src/app/user.service";
import { FullNamePipe } from "../pipes/full-name.pipe";
import { UserSimpleListComponent } from "./user-simple-list.component";

const userList = [
    {
        "id": "1f0c9438-3fc8-4766-8402-c1e58f5abf2e",
        "prefix": "Ms.",
        "firstname": "Noel",
        "lastname": "Marks",
        "username": "Noel_Marks",
        "gender": "male",
        "email": "Noel30@gmail.com",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/494.jpg",
        "position": "Senior Branding Agent",
        "birthdate": new Date("1962-01-24T14:39:10.701Z"),
        "phone": "525-646-568",
        "cell": "608-867-687",
        "location": {
          "street": "725 Larry Harbors Apt. 924",
          "city": "Westfield",
          "country": "Libyan Arab Jamahiriya"
        },
        "born": "MA"
      },
      {
        "id": "ebd85060-89d7-4e86-903a-ad2df84a5156",
        "prefix": "Mrs.",
        "firstname": "Jared",
        "lastname": "Koss",
        "username": "Jared58",
        "gender": "male",
        "email": "Jared56@hotmail.com",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/294.jpg",
        "position": "Regional Quality Orchestrator",
        "birthdate": new Date("1981-06-11T01:47:09.120Z"),
        "phone": "533-723-321",
        "cell": "603-492-022",
        "location": {
          "street": "39245 Creola Lights Suite 063",
          "city": "Round Rock",
          "country": "Equatorial Guinea"
        },
        "born": "MU"
      },
      {
        "id": "98d5fe96-1f88-4885-915d-66a84ccd10fb",
        "prefix": "Ms.",
        "firstname": "Leslie",
        "lastname": "Cummings",
        "username": "Leslie_Cummings",
        "gender": "male",
        "email": "Leslie12@gmail.com",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/403.jpg",
        "position": "Internal Configuration Officer",
        "birthdate": new Date("1945-02-06T17:32:59.833Z"),
        "phone": "552-030-576",
        "cell": "608-100-440",
        "location": {
          "street": "7823 Jovanny Forks Apt. 960",
          "city": "Huntington Park",
          "country": "Anguilla"
        },
        "born": "ER"
      }
]

describe('User Simple List', () => {

    let mockUserService: jasmine.SpyObj<UserService>;
    let fixture;

    beforeEach(() => {
        mockUserService = jasmine.createSpyObj('UserService', ['getUsers'])
        mockUserService.getUsers.and.returnValue(of(userList))

        TestBed.configureTestingModule({
            declarations: [ UserSimpleListComponent, FullNamePipe ],
            providers: [ {
                provide: UserService,
                useValue: mockUserService
            }]
        });
    });

    it('should get users from service', () => {
        fixture = TestBed.createComponent(UserSimpleListComponent);
        fixture.detectChanges();

        expect((mockUserService as any).getUsers).toHaveBeenCalled();
    });

    it ('should have three users in the model', () => {
        fixture = TestBed.createComponent(UserSimpleListComponent);
        fixture.detectChanges();

        const composant = fixture.componentInstance;
        expect(composant.users.length).toBe(3);
    });

    it ('should have three users in the template', () => {
        fixture = TestBed.createComponent(UserSimpleListComponent);
        fixture.detectChanges();

        const elems = fixture.debugElement.queryAll(By.css('div'));
        expect(elems.length).toBe(3);
    });

    it ('should have all users matching the input', () => {
        fixture = TestBed.createComponent(UserSimpleListComponent);
        fixture.detectChanges();

        const expectedNames = [
            'Ms. Noel MARKS',
            'Mrs. Jared KOSS',
            'Ms. Leslie CUMMINGS'
        ];

        const elems = fixture.debugElement.queryAll(By.css('div'));
        for (let index = 0; index < 3; index++) {
            expect(elems[index].nativeElement.innerText).toEqual(expectedNames[index])
        }
    });

});