import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
//------------------ROUTING
import { AppRoutingModule } from './app-routing.module';
//------------------PRINCIPAL
import { AppComponent } from './app.component';
//------------------HOME
import { HomeComponent } from './components/home/home.component';
//------------------SERVICES
import { UserInfoService } from './services/user-info.service';
import { SocketService } from './services/socket-service.service';
import { StoreUserService } from './services/store-user.service';

import { HttpClientModule } from '@angular/common/http';
//------------------CHAT
import { ChatComponent } from './components/chat/chat.component';
import { SlideComponent } from './components/chat/slide/slide.component';
import { HeaderComponent } from './components/chat/header/header.component';
import { BodyComponent } from './components/chat/body/body.component';
import { FooterComponent } from './components/chat/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    SlideComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserInfoService,SocketService,StoreUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
