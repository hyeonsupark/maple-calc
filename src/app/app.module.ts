import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UpgradeModule } from './upgrade/upgrade.module';
import { RandomboxModule } from './randombox/randombox.module';
import { HttpClientModule } from '@angular/common/http';
import { ArcaneForceModule } from './arcane-force/arcane-force.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    UpgradeModule,
    RandomboxModule,
    ArcaneForceModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
