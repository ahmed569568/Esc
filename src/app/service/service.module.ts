import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';

@NgModule({
  imports: [CommonModule, TranslateModule, ServiceRoutingModule],
  declarations: [ServiceComponent]
})
export class ServiceModule {}
