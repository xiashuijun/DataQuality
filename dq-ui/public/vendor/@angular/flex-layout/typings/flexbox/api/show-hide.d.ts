import { ElementRef, OnInit, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BaseFxDirective } from './base';
import { MediaMonitor } from '../../media-query/media-monitor';
import { LayoutDirective } from './layout';
export declare function negativeOf(hide: any): boolean;
export declare class ShowHideDirective extends BaseFxDirective implements OnInit, OnChanges, OnDestroy {
    protected _layout: LayoutDirective;
    protected elRef: ElementRef;
    protected renderer: Renderer2;
    protected _layoutWatcher: Subscription;
    show: any;
    showXs: any;
    showSm: any;
    showMd: any;
    showLg: any;
    showXl: any;
    showLtSm: any;
    showLtMd: any;
    showLtLg: any;
    showLtXl: any;
    showGtXs: any;
    showGtSm: any;
    showGtMd: any;
    showGtLg: any;
    hide: any;
    hideXs: any;
    hideSm: any;
    hideMd: any;
    hideLg: any;
    hideXl: any;
    hideLtSm: any;
    hideLtMd: any;
    hideLtLg: any;
    hideLtXl: any;
    hideGtXs: any;
    hideGtSm: any;
    hideGtMd: any;
    hideGtLg: any;
    constructor(monitor: MediaMonitor, _layout: LayoutDirective, elRef: ElementRef, renderer: Renderer2);
    protected _getDisplayStyle(): string;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected _updateWithValue(value?: string | number | boolean): void;
    protected _buildCSS(show: any): {
        'display': any;
    };
    _validateTruthy(show: any): boolean;
}
