import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

	public items = [
		{
			name: 'test1-row-1',
			icon: 'fas fa-thumbs-up',
			type: 'category',
			href: '',

			subitems:[
				{
					name: 'test1-row-2',
					icon: 'fas fa-thumbs-up',
					type: 'button',
					href: 'www.google.nl',
				},
				{
					name: 'test1-row-2',
					icon: 'fas fa-thumbs-up',
					type: 'category',
					href: '',

					subitems:[
						{
							name: 'test1-sub',
							icon: 'fas fa-thumbs-up',
							type: 'button',
							href: 'www.google.nl',
						}
					]
				}
			]
		},
		{
			name: 'test2-row-1',
			icon: 'fas fa-thumbs-up',
			type: 'button',
			href: 'www.google.nl',
		}
	]
	constructor() { }

	ngOnInit() {
		console.log(this.items);
	}

}
