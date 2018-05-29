import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { SelectComponent } from './select/select.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { DBService } from './dbservice.service';
import { InsertempskillComponent } from './insertempskill/insertempskill.component';
import { ShowempskillComponent } from './showempskill/showempskill.component';
import { InsertempskillmasterComponent } from './insertempskillmaster/insertempskillmaster.component';
import { ShowempskillmasterComponent } from './showempskillmaster/showempskillmaster.component';
import { UpdateskillmasterComponent } from './updateskillmaster/updateskillmaster.component';



@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    UpdateComponent,
    SelectComponent,
    InsertempskillComponent,
    ShowempskillComponent,
    InsertempskillmasterComponent,
    ShowempskillmasterComponent,
    UpdateskillmasterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
