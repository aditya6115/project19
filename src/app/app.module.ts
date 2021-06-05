import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Products19Component } from './products19/products19.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BikesComponent } from './bikes/bikes.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { from } from 'rxjs';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    Products19Component,
    FooterComponent,
    ProductDetailesComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    MobilesComponent,
    BikesComponent,
    TelevisionsComponent,
    PagenotfoundComponent,
    TestComponent,
    UsersComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
