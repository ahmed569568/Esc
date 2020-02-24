import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CustomersRoutingModule } from './Customers-routing.module';
import { CustomersComponent } from './Customers.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CustomersRoutingModule],
  declarations: [CustomersComponent]
})
export class CustomersModule {}
