import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RemotePage } from '../pages/remote/remote';
import { VocalPage } from '../pages/vocal/vocal';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/index';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RemotePage,
    VocalPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RemotePage,
    VocalPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
