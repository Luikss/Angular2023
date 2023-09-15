export class DataService {
  getDetails(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500)
    });
  }
}
