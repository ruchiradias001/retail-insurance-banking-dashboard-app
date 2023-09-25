import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { InsClvPredictionComponent } from './pages/insurance/ins-clv-prediction/ins-clv-prediction.component';
import { BankingComponent } from './pages/banking/banking.component';
import { RetailComponent } from './pages/retail/retail.component';
import { InsDashboardComponent } from './pages/insurance/ins-dashboard/ins-dashboard.component';
import { BanClvPredictionComponent } from './pages/banking/ban-clv-prediction/ban-clv-prediction.component';
import { BanDashboardComponent } from './pages/banking/ban-dashboard/ban-dashboard.component';
import { RetDashboardComponent } from './pages/retail/ret-dashboard/ret-dashboard.component';
import { AiAssistantComponent } from './pages/ai-assistant/ai-assistant.component';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';

const MatModules = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatTabsModule,
  MatExpansionModule,
  MatRadioModule
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    InsuranceComponent,
    InsClvPredictionComponent,
    BankingComponent,
    RetailComponent,
    InsDashboardComponent,
    BanClvPredictionComponent,
    BanDashboardComponent,
    RetDashboardComponent,
    AiAssistantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
