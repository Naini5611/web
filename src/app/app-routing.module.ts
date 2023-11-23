import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AuthorComponent } from './pages/author/author.component';
import { ArticleComponent } from './pages/article/article.component';
import { ListAuthorsComponent } from './pages/list-authors/list-authors.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'author-article', component: ListAuthorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
