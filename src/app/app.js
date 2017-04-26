'use strict';
import './app.style.scss';
import { ScenesObjects } from './scenes-objects';
import { POINTS_3D } from './consts';

export default function init() {
    let objs = new ScenesObjects(POINTS_3D);
    console.log(objs);
}