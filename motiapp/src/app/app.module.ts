import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NG-ZORRO Modules
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';

// NG-ZORRO i18n
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

// Application Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // จำเป็นสำหรับ NG-ZORRO
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzMessageModule,
    AppComponent,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }, // ตั้งค่าภาษา (เปลี่ยนเป็น th_TH หากต้องการภาษาไทย)
  ],
})
export class AppModule {}
