import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ocangularblog';

  posts = [
    {
      title: 'Mon premier post',
      content: '1 Lorem Ipsum Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s Lorem Ipsum Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Mon deuxième post',
      content: '2 Lorem Ipsum Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s Lorem Ipsum Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Mon troisième post',
      content: '3 Lorem Ipsum Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s Lorem Ipsum Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      loveIts: 0,
      created_at: Date()
    }
  ];
}
