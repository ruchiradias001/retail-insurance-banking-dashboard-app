import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { BankingComponent } from './pages/banking/banking.component';
import { RetailComponent } from './pages/retail/retail.component';
import { AiAssistantComponent } from './pages/ai-assistant/ai-assistant.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "insurance",
    component: InsuranceComponent
  },
  {
    path: "banking",
    component: BankingComponent
  },
  {
    path: "retail",
    component: RetailComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "ai",
    component: AiAssistantComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
