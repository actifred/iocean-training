import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FullNamePipe } from "../pipes/full-name.pipe";
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { UserListComponent } from "./user-list.component";

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
];

@Component({
    selector: 'app-profile-card',
    template: ''
})
class FakeProfileCardComponent {
  @Input() public user!: any;
  @Output() public goToUser = new EventEmitter();
  public onClick() {}
}

describe('User List Component', () => {
    let fixture: ComponentFixture<UserListComponent>;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserListComponent,
                ProfileCardComponent,
                FullNamePipe
//                FakeProfileCardComponent
            ]
        });
        fixture = TestBed.createComponent(UserListComponent);
    });

    it('should display as many cards as users in input', () => {
        fixture.componentInstance.loading = false;
        fixture.componentInstance.users = userList;

        fixture.detectChanges();

        const elems = fixture.debugElement.queryAll(By.directive(ProfileCardComponent));
        expect(elems.length).toBe(3);

    });

    it('should display the first user in input correctly', () => {
        fixture.componentInstance.loading = false;
        fixture.componentInstance.users = userList;

        fixture.detectChanges();

        const elems = fixture.debugElement.queryAll(By.directive(ProfileCardComponent));
        expect(elems[0].componentInstance.user.lastname).toBe('Marks');

    });
});