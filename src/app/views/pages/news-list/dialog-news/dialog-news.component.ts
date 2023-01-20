import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-dialog-news',
	templateUrl: './dialog-news.component.html',
	styleUrls: ['./dialog-news.component.scss'],
})
export class DialogNewsComponent implements OnInit {
	addNews!: FormGroup;
	private srcResult: any;

	constructor(public dialogRef: MatDialogRef<DialogNewsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	ngOnInit(): void {
		this.addNews = new FormGroup({
			name: new FormControl(null),
			description: new FormControl(null),
			image: new FormControl(null),
		});

		console.log('this.addNews', this.addNews);
	}

	onFileSelected() {
		const inputNode: any = document.querySelector('#file');

		if (typeof FileReader !== 'undefined') {
			const reader = new FileReader();

			reader.onload = (e: any) => {
				this.srcResult = e.target.result;
			};

			reader.readAsArrayBuffer(inputNode.files[0]);
		}
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
