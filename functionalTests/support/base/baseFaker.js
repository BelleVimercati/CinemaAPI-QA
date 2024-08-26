import Faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

export class BaseFaker {
  randomMovie() {
    return {
     title: `${Faker.internet.userName()}`,
     description: `${Faker.lorem.sentences(2)}`,
     launchdate: "2024-08-26T13:14:22.087Z",
     showtimes: ["2024-08-26T13:38:37.241Z"] 
    };
  }
}

