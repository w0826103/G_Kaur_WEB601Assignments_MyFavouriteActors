import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypesupporterPipe } from '../typesupporter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypesupporterPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Ammy virk",
        description:"Amrinderpal Singh Virk, better known as Ammy Virk, is an Indian singer, actor and producer associated with Punjabi Music and subsequently in Punjabi and Hindi Movies.",
        creator:"Ammy Virk",
        imgURL:"https://pbs.twimg.com/profile_images/1454355092111458306/Lcvl5T2S_400x400.jpg",
        type:"Punjab",
        tags: ["Punjab", "Stylish"]
      },
      {
        id: 1,
      title: "Tom Cruise",
      description:"Thomas Cruise Mapother IV (born July 3, 1962) is an American actor.",
      creator:"Tom cruise",
      imgURL:"https://goldenglobes.com/wp-content/uploads/2023/10/17-tomcruiseag.jpg",
      type:"",
        tags: ["MostHandsome", "American"]
      },
      {
        id: 2,
        title: "Amrinder Gill",
        description:"Amrinder Singh Gill is an Indian actor, singer, songwriter, and film producer who makes Punjabi-language films and music.",
        creator:"Amrinder Gill",
        imgURL:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Director_Simerjit_Singh_%28cropped%29.jpg",
        type:"Punjab",
        tags: ["Gill", "Allrounder"]
      },
      {
        id: 3,
        title: "Shahrukh Khan",
        description: "Well-known actor of india since 90s",
        creator: "Shahrukh Khan",
        imgURL: "https://c.ndtvimg.com/2024-01/om47vitg_-pooja-dadlani_625x300_30_January_24.jpg",
        type: "Bollywood",
        tags: ["Romantic", "Hero"]
      },
      {
        id: 4,
        title: "Salman Khan",
        description: "Famous Indian actor with multiple hit movies.",
        creator: "Salman Khhan",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/9/95/Salman_Khan_in_2023_%281%29_%28cropped%29.jpg",
        type: "Bollywood",
        tags: ["Hit", "Body"]
      },
      {
        id: 5,
        title: "Hritik Roshan",
        description: "Well knwon indian actor with some good dance and action moves.",
        creator: "Hritik Roshan",
        imgURL: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/238324_v9_bb.jpg",
        type: "Punjab",
        tags: ["Action", "Dance"]
      
      },{
        id: 6,
        title: "Siddharth Malhotra",
        description: "Young Indian actor with multiple hit movies.",
        creator: "Siddharth Malhora",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Sidharth_Malhotra_snapped_during_Indian_Police_Force_promotion.jpg",
        type: "Bollywood",
        tags: ["Young", "Talented"]
      }
      
    ];
  }
 
}