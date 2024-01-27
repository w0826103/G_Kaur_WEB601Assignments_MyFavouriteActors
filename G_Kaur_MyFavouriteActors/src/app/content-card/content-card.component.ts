import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Ammy virk",
      description:"Amrinderpal Singh Virk, better known as Ammy Virk, is an Indian singer, actor and producer associated with Punjabi Music and subsequently in Punjabi and Hindi Movies.",
      creator:"Ammy Virk",
      imgURL:"https://pbs.twimg.com/profile_images/1454355092111458306/Lcvl5T2S_400x400.jpg",
      type:"Indian Superstar"
    });
    this.contentList.addContent({
      id: 1,
      title: "Tom Cruise",
      description:"Thomas Cruise Mapother IV (born July 3, 1962) is an American actor.",
      creator:"Tom cruise",
      imgURL:"https://goldenglobes.com/wp-content/uploads/2023/10/17-tomcruiseag.jpg",
      type:"Amreica born international actor"
    });
    this.contentList.addContent({
      id: 2,
      title: "Amrinder Gill",
      description:"Amrinder Singh Gill is an Indian actor, singer, songwriter, and film producer who makes Punjabi-language films and music.",
      creator:"Amrinder Gill",
      imgURL:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Director_Simerjit_Singh_%28cropped%29.jpg",
      type:"Multitalented Punjabi Actor"
    });
  }
}