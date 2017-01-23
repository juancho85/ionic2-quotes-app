export class SettingsService {
  private hasAlternativeBackground: boolean = false;

  isAlternativeBackground(): boolean {
    return this.hasAlternativeBackground;
  }

  setHasAlternativeBackground(hasAlternativeBackground: boolean){
    this.hasAlternativeBackground = hasAlternativeBackground;
  }


}
