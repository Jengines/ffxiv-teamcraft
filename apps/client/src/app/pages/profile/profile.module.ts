import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ClipboardModule } from 'ngx-clipboard';
import { ListModule } from '../../modules/list/list.module';
import { CoreModule } from '../../core/core.module';
import { PipesModule } from '../../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullpageMessageModule } from '../../modules/fullpage-message/fullpage-message.module';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormsModule } from '@angular/forms';
import { MasterbooksPopupComponent } from './profile-editor/masterbooks-popup/masterbooks-popup.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileEditorComponent
  },
  {
    path: ':userId',
    component: PublicProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NgZorroAntdModule,
    ClipboardModule,
    PipesModule,
    CoreModule,
    ListModule,
    FlexLayoutModule,
    FullpageMessageModule,

    RouterModule.forChild(routes)
  ],
  declarations: [PublicProfileComponent, ProfileEditorComponent, MasterbooksPopupComponent],
  entryComponents: [ProfileEditorComponent, MasterbooksPopupComponent]
})
export class ProfileModule {
}
