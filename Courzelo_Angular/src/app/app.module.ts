import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';

import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UserService } from './Service/user.service';
import { ProfileComponent } from './User/profile/profile.component';
import { PartnerComponent } from './User/partner/partner.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { ResetpasswordComponent } from './User/resetpassword/resetpassword.component';
import { AlluserComponent } from './User/alluser/alluser.component';
import { UpdateuserComponent } from './User/updateuser/updateuser.component';
import { FooterrComponent } from './footerr/footerr.component';
import { HeaderrComponent } from './headerr/headerr.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

import { AddClassComponent } from './Class/add-class/add-class.component';
import { AllClassComponent } from './Class/all-class/all-class.component';
import { DetailClassComponent } from './Class/detail-class/detail-class.component';
import { UpdateClassComponent } from './Class/update-class/update-class.component';
import { AddCommentComponent } from './Comment/add-comment/add-comment.component';
import { DetailCommentComponent } from './Comment/detail-comment/detail-comment.component';
import { UpdateCommentComponent } from './Comment/update-comment/update-comment.component';
import { AddCourseComponent } from './Course/add-course/add-course.component';
import { AllCourseComponent } from './Course/all-course/all-course.component';
import { DetailCourseComponent } from './Course/detail-course/detail-course.component';
import { UpdateCourseComponent } from './Course/update-course/update-course.component';
import { AddEventComponent } from './Event/addevent/addevent.component';
import { AlleventsComponent } from './Event/allevents/allevents.component';
import { ShoweventComponent } from './Event/showevent/showevent.component';
import { UpdateeventComponent } from './Event/updateevent/updateevent.component';
import { AllLessonComponent } from './Lesson/all-lesson/all-lesson.component';
import { DetailLessonComponent } from './Lesson/detail-lesson/detail-lesson.component';
import { UpdateLessonComponent } from './Lesson/update-lesson/update-lesson.component';
import { AddModuleComponent } from './Module/add-module/add-module.component';
import { AllModuleComponent } from './Module/all-module/all-module.component';
import { DetailModuleComponent } from './Module/detail-module/detail-module.component';
import { UpdateModuleComponent } from './Module/update-module/update-module.component';
import { AddProgramComponent } from './Program/add-program/add-program.component';
import { AllProgramComponent } from './Program/all-program/all-program.component';
import { DetailProgramComponent } from './Program/detail-program/detail-program.component';
import { UpdateProgramComponent } from './Program/update-program/update-program.component';
import { AddPublicationComponent } from './Publication/add-publication/add-publication.component';
import { DetailPublicationComponent } from './Publication/detail-publication/detail-publication.component';
import { PublicationComponent } from './Publication/publication/publication.component';
import { UpdatePublicationComponent } from './Publication/update-publication/update-publication.component';
import { AddquestionComponent } from './Question/addquestion/addquestion.component';
import { AllquestionsComponent } from './Question/allquestions/allquestions.component';
import { ShowquestionComponent } from './Question/showquestion/showquestion.component';
import { UpdatequestionComponent } from './Question/updatequestion/updatequestion.component';
import { AllquizzesComponent } from './Quiz/allquizzes/allquizzes.component';
import { ShowquizComponent } from './Quiz/showquiz/showquiz.component';
import { UpdatequizComponent } from './Quiz/updatequiz/updatequiz.component';
import { AddspeakerComponent } from './Speaker/addspeaker/addspeaker.component';
import { AllspeakersComponent } from './Speaker/allspeakers/allspeakers.component';
import { ShowspeakerComponent } from './Speaker/showspeaker/showspeaker.component';
import { UpdatespeakerComponent } from './Speaker/updatespeaker/updatespeaker.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { CoursesFrontComponent } from './courses-front/courses-front.component';
import { EvaluationManagementComponent } from './evaluation-management/evaluation-management.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { ContentidComponent } from './exemple1/contentid/contentid.component';
import { Exemple1Component } from './exemple1/exemple1.component';
import { ForumManagementComponent } from './forum-management/forum-management.component';
import { AddLessonAlerteComponent } from './forum/add-lesson-alerte/add-lesson-alerte.component';
import { ForumComponent } from './forum/forum.component';
import { GetLessonWithIdClassComponent } from './forum/get-lesson-with-id-class/get-lesson-with-id-class.component';
import { LessonTesteComponent } from './lesson-teste/lesson-teste.component';
import { ModuleSpecialityComponent } from './module-speciality/module-speciality.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AccountComponent } from './account/account.component';
import { InstructionComponent } from './Quiz/instruction/instruction.component';
import { StartquizComponent } from './Quiz/startquiz/startquiz.component';
import { TestquizComponent } from './Quiz/testquiz/testquiz.component';
import { EventregistrationComponent } from './Event/eventregistration/eventregistration.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddquizComponent } from './Quiz/addquiz/addquiz.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AddLessonComponent } from './Lesson/add-lesson/add-lesson.component';
import { AllCommentComponent } from './Comment/all-comment/all-comment.component';
import { AssignLessonToClassComponent } from './assign-lesson-to-class/assign-lesson-to-class.component';
import { AddlessontomoduleComponent } from './addlessontomodule/addlessontomodule.component';

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,

    AddUserComponent,
    ProfileComponent,
    PartnerComponent,
    UserProfileComponent,
    ResetpasswordComponent,
    AlluserComponent,
    UpdateuserComponent,
    BackComponent,
    FrontComponent,
    TeacherDashboardComponent,
    FooterrComponent,
    HeaderrComponent,
    AllClassComponent,
    AddClassComponent,
    AddCommentComponent,
    AllCourseComponent,
    AddCourseComponent,
    AllLessonComponent,
    AddModuleComponent,
    PublicationComponent,
    AddPublicationComponent,
    AddProgramComponent,
    AllProgramComponent,
    UpdateClassComponent,
    DetailClassComponent,
    UpdateProgramComponent,
    DetailProgramComponent,
    DetailPublicationComponent,
    UpdatePublicationComponent,
    DetailModuleComponent,
    UpdateModuleComponent,
    UpdateLessonComponent,
    DetailLessonComponent,
    DetailCourseComponent,
    UpdateCourseComponent,
    DetailCommentComponent,
    UpdateCommentComponent,  
    AddEventComponent, 
    AlleventsComponent ,
    ShoweventComponent,
    AddspeakerComponent,
    AllspeakersComponent,
    AddquestionComponent,
    AllquestionsComponent,
    AllquizzesComponent,
    ShowspeakerComponent,
    ShowquizComponent,
    NotfoundComponent,
    ShowquestionComponent,
    UpdatespeakerComponent,
    UpdatequizComponent,
    UpdatequestionComponent,
    UpdateeventComponent,
    SidebarComponent,
    UserManagementComponent,
    CourseManagementComponent,
    EventManagementComponent,
    EvaluationManagementComponent,
    ForumManagementComponent,
    TestComponent,
    ForumComponent,
    LessonTesteComponent,
    StudentComponent,
    CoursesFrontComponent,
    ModuleSpecialityComponent,
    Exemple1Component,
    ContentidComponent,
    AddLessonAlerteComponent,
    GetLessonWithIdClassComponent,
    AccountComponent,
    StartquizComponent,
    TestquizComponent,
    InstructionComponent,
    EventregistrationComponent,
    AddquizComponent,
    ConfirmationDialogComponent,
    AddLessonComponent,
    AllModuleComponent,
    AllCommentComponent,
    AssignLessonToClassComponent,
    AddlessontomoduleComponent


      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    NgxPaginationModule,
  
    

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }