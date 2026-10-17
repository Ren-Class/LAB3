import { Component } from '@angular/core';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  readonly ImpactStyle = ImpactStyle;
  readonly NotificationType = NotificationType;

  impact(style: ImpactStyle) {
    return Haptics.impact({ style });
  }

  notify(type: NotificationType) {
    return Haptics.notification({ type });
  }

  vibrate(duration = 300) {
    return Haptics.vibrate({ duration });
  }

  async selectionDemo() {
    await Haptics.selectionStart();
    for (let i = 0; i < 5; i++) {
      await Haptics.selectionChanged();
      await new Promise((r) => setTimeout(r, 80));
    }
    await Haptics.selectionEnd();
  }
}
