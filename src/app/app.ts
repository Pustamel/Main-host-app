import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected title = 'main-app';
  @ViewChild('microTest', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private injector: Injector) { }

  async ngAfterViewInit() {
   const module = await loadRemoteModule({
      remoteEntry: 'http://localhost:42001/remoteEntry.js',
      exposedModule: 'MicroTest',
      type: 'module'
    });

    if(module.MfEntryComponent) {
    const component = module.MfEntryComponent;

    this.container.createComponent(component, {
      injector: this.injector
    });
    }
  }
}
