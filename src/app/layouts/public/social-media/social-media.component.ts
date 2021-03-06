import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  testimonials: any[] = [
    { name: 'Peter Lam', country: 'Singapore', description: 'C S INNOVATION was top notch to work with from beginning to end. They were always responsive and provided crystal clear communication. They also provided his honest feedback in order to help me take my product to the next level. His services were fairly priced, and I would 100% recommend him to anyone else looking for 3d modelling/design/etc. Will use him again in the future.', colors: 'bg-theme-blue text-white' },
    { name: 'Derek', country: 'USA', description: 'C S Innovations was very easy to work with. Quick to answer questions, offer solutions, and does excellent quality machining. Delivery was prompt and the price was right. Would strongly recommend to others.', colors: 'bg-light-blue text-black' },
    { name: 'Marko', country: 'North Macedonia', description: 'I highly recommend this seller for every CNC machining job, also very helpful, and do everything they can to get fast shipping to your place and with a reasonable price for it. Great person to work with.', colors: 'bg-theme-blue text-white' },
    { name: 'Kunle', country: 'United Kingdom', description: "Very professional checked in with me for revisions reviewed the information I'd provided and helped me detect mistakes. I'd definitely use this supplier again.", colors: 'bg-light-blue text-black' },
    { name: 'Soar', country: 'USA', description: 'Work was fast and communication great. Planning to work another project with them.', colors: 'bg-theme-blue text-white' },
    { name: 'Chris', country: 'USA', description: 'Seller did an excellent job of being responsive. Definitely will be contacting for future jobs.', colors: 'bg-light-blue text-black' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
