import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { DogService } from '../../services';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({ templateUrl: 'dog.component.html' })
export class DogComponent { 
    dogImgList?: any[] = [];
    constructor(private dogService: DogService) {}

    ngOnInit() {
        const dogsUrl = this.dogService.getDogsImg();
        forkJoin([dogsUrl, dogsUrl, dogsUrl, dogsUrl, dogsUrl, dogsUrl, dogsUrl, dogsUrl, dogsUrl, dogsUrl]).subscribe(results => {
            this.dogImgList?.push(results[0]);
            this.dogImgList?.push(results[1]);
            this.dogImgList?.push(results[2]);
            this.dogImgList?.push(results[3]);
            this.dogImgList?.push(results[4]);
            this.dogImgList?.push(results[5]);
            this.dogImgList?.push(results[6]);
            this.dogImgList?.push(results[7]);
            this.dogImgList?.push(results[8]);
            this.dogImgList?.push(results[9]);
        });
    }
}