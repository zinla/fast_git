import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
for (let i = 0; i < document.getElementsByTagName('code').length; i++) {
  document
    .getElementsByTagName('code')
  [i].setAttribute('data-prismjs-copy', 'Copy');
  console.log(document.getElementsByTagName('code')[i]);
}
