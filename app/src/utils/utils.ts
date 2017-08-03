export class Utils {
  public randomId(): number {
    return Number(Math.random().toString(36).substring(7));
  }
}
