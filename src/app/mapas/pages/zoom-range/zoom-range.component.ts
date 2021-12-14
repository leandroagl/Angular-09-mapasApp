import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container {
      height: 100%;
      width: 100%
    }

    .row {
      background-color: white;
      border-radius: 5px;
      position: fixed;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 9999;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa: mapboxgl.Map;

  zoomLevel: number = 10;


  constructor() {}

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -58.55167818147597, -34.65240183305607 ],
      zoom: this.zoomLevel
    });
  }

  zoomIn() {
    this.mapa.zoomIn();
    this.zoomLevel = this.mapa.getZoom();
  }

  zoomOut() {
    this.mapa.zoomOut();
    this.zoomLevel = this.mapa.getZoom();
  }



}
