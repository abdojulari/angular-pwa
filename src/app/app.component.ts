import { Component, OnInit } from '@angular/core';
import { SwUpdate, UnrecoverableStateEvent, 
VersionEvent, VersionReadyEvent
} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // adding swUpdate to automatically sync the update for the pwa
  // you can read more on that here - https://angular.io/api/service-worker/SwUpdate
  constructor(private updates: SwUpdate) {}
  ngOnInit() {
    if(!this.updates.isEnabled) {
       return;
      }
    this.handleUpdates();
  }

  handleUpdates() {
    this.updates.versionUpdates.subscribe(
      (event: VersionEvent) => {
        if (event.type === 'VERSION_READY' && (event as VersionReadyEvent).latestVersion.hash) {
          this.updates.activateUpdate().then(() => {
            document.location.reload();
          });
        }
      }
    );

    this.updates.unrecoverable.subscribe(
      (event: UnrecoverableStateEvent) => {
        console.error('Error reason : ' + event.reason);
      }
    );
  }
}
