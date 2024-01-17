
import { Injectable } from '@angular/core';
import { ViewportScroller } from "@angular/common";


// Here are functions, wich may are needed from every component to use


@Injectable({
    providedIn: 'root'
})

export class SharedService {

    constructor(private scroller: ViewportScroller) { }

    /**
     * Will scroll to HTML area wich id == target
     * @param target ID of HTML Area, the user has to scroll to.
     */
    goTo(target: string) {
        this.scroller.scrollToAnchor(target);
    }
}