import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service'; // Il tuo servizio

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)  // Configura in-memory qui
    ],
    bootstrap: [AppComponent]  // Bootstrap del componente
})
export class AppBootstrapModule {}
