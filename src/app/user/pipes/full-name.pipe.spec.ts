import { FullNamePipe } from "./full-name.pipe";

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

  const mockUserWithNonLatinChars = {
    "id": "fbb9fc12-82fc-4820-9fd9-27cb222db4c8",
    "prefix": "Dr.",
    "firstname": "سارا",
    "lastname": "موسوی",
    "username": "Alejandro23",
    "gender": "male",
    "email": "Alejandro53@hotmail.com",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1040.jpg",
    "position": "Regional Accountability Coordinator",
    "birthdate": new Date("1979-07-26T19:33:39.477Z"),
    "phone": "504-347-409",
    "cell": "606-309-574",
    "location": {
      "street": "14146 Gussie Street Apt. 917",
      "city": "Jupiter",
      "country": "Bouvet Island (Bouvetoya)"
    },
    "born": "WS"
  };

describe('FullNamePipe', () => {
    let pipe: FullNamePipe;

    beforeEach(() => {
        pipe = new FullNamePipe();
    });

    it('should create a user full name with capital last name', () => {
        const fullName = pipe.transform(mockUser);

        expect(fullName).toEqual('Mr. Oliver SCHUPPE');
    });

    it('should create a user full name with non latin characters', () => {
        const fullName = pipe.transform(mockUserWithNonLatinChars);

        expect(fullName).toEqual('Dr. سارا موسوی');
    });

});