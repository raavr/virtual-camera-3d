webpackJsonp([1],[function(t,e,n){"use strict";function a(){(new i.App).init()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var i=n(7);a()},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Point3D=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(3);e.Point3D=function(){function t(e,n,i){a(this,t),this.x=e,this.y=n,this.z=i}return i(t,[{key:"setX",value:function(t){this.x=Math.round(t*r.ROUND_PRECISION)/r.ROUND_PRECISION}},{key:"setY",value:function(t){this.y=Math.round(t*r.ROUND_PRECISION)/r.ROUND_PRECISION}},{key:"setZ",value:function(t){this.z=Math.round(t*r.ROUND_PRECISION)/r.ROUND_PRECISION}},{key:"updatePoint",value:function(t){this.setX(t[0]),this.setY(t[1]),this.setZ(t[2])}}]),t}()},function(t,e,n){"use strict";function a(t){var e=t.b.x-t.a.x,n=t.b.y-t.a.y,a=t.b.z-t.a.z,i=t.c.x-t.a.x,r=t.c.y-t.a.y,o=t.c.z-t.a.z;return new x.Point3D(n*o-a*r,a*i-e*o,e*r-n*i)}function i(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}function r(t){return Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)}function o(t){return new x.Point3D(t.x/r(t),t.y/r(t),t.z/r(t))}function s(t,e){return Math.round(i(o(a(t)),e)-i(o(a(t)),t.a))}function u(t,e){for(var n=[0,0,0,0],a=0;a<4;a++)for(var i=0;i<4;i++)n[a]+=t[a][i]*e[i];return n}function c(t){return[t.x,t.y,t.z,1]}function l(t){return t.z>=0}function y(t){return!isNaN(+t)&&isFinite(t)}function f(t,e,n){var a;return function(){var i=this,r=arguments,o=function(){a=null,n||t.apply(i,r)},s=n&&!a;clearTimeout(a),a=setTimeout(o,e),s&&t.apply(i,r)}}Object.defineProperty(e,"__esModule",{value:!0}),e.computeVectorProduct=a,e.computeScalarProduct=i,e.computeVectorLen=r,e.computeNormalVector=o,e.getPointPositionRelativeToPlane=s,e.multiplyMatrixByVector=u,e.createVector=c,e.isVisible=l,e.isNumeric=y,e.debounce=f;var x=n(1)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ROUND_PRECISION=1e5,e.AXIS={X:0,Y:1,Z:2},e.ZOOM={IN:0,OUT:1},e.POINTS_3D=[[{x:-450,y:150,z:850},{x:-450,y:-200,z:850},{x:-200,y:-200,z:850}],[{x:-200,y:-200,z:850},{x:-200,y:150,z:850},{x:-450,y:150,z:850}],[{x:-200,y:-200,z:850},{x:-200,y:-200,z:1100},{x:-200,y:150,z:1100}],[{x:-200,y:-200,z:850},{x:-200,y:150,z:850},{x:-200,y:150,z:1100}],[{x:-450,y:150,z:1100},{x:-200,y:150,z:1100},{x:-200,y:-200,z:1100}],[{x:-450,y:150,z:1100},{x:-450,y:-200,z:1100},{x:-200,y:-200,z:1100}],[{x:-450,y:150,z:850},{x:-450,y:150,z:1100},{x:-450,y:-200,z:1100}],[{x:-450,y:150,z:850},{x:-450,y:-200,z:850},{x:-450,y:-200,z:1100}],[{x:-450,y:-200,z:850},{x:-450,y:-200,z:1100},{x:-200,y:-200,z:1100}],[{x:-450,y:-200,z:850},{x:-200,y:-200,z:850},{x:-200,y:-200,z:1100}],[{x:-200,y:150,z:850},{x:-450,y:150,z:850},{x:-450,y:150,z:1100}],[{x:-200,y:150,z:850},{x:-200,y:150,z:1100},{x:-450,y:150,z:1100}],[{x:450,y:-200,z:850},{x:200,y:-200,z:850},{x:200,y:150,z:850}],[{x:450,y:-200,z:850},{x:450,y:150,z:850},{x:200,y:150,z:850}],[{x:450,y:150,z:1100},{x:450,y:-200,z:1100},{x:450,y:-200,z:850}],[{x:450,y:150,z:1100},{x:450,y:150,z:850},{x:450,y:-200,z:850}],[{x:450,y:-200,z:1100},{x:450,y:150,z:1100},{x:200,y:150,z:1100}],[{x:200,y:150,z:1100},{x:200,y:-200,z:1100},{x:450,y:-200,z:1100}],[{x:200,y:150,z:850},{x:200,y:150,z:1100},{x:200,y:-200,z:1100}],[{x:200,y:150,z:850},{x:200,y:-200,z:850},{x:200,y:-200,z:1100}],[{x:200,y:-200,z:850},{x:200,y:-200,z:1100},{x:450,y:-200,z:1100}],[{x:450,y:-200,z:1100},{x:450,y:-200,z:850},{x:200,y:-200,z:850}],[{x:450,y:150,z:850},{x:200,y:150,z:850},{x:200,y:150,z:1100}],[{x:450,y:150,z:850},{x:450,y:150,z:1100},{x:200,y:150,z:1100}],[{x:450,y:-200,z:1500},{x:200,y:-200,z:1500},{x:200,y:150,z:1500}],[{x:450,y:-200,z:1500},{x:450,y:150,z:1500},{x:200,y:150,z:1500}],[{x:450,y:150,z:1750},{x:450,y:-200,z:1750},{x:450,y:-200,z:1500}],[{x:450,y:150,z:1750},{x:450,y:150,z:1500},{x:450,y:-200,z:1500}],[{x:450,y:-200,z:1750},{x:450,y:150,z:1750},{x:200,y:150,z:1750}],[{x:200,y:150,z:1750},{x:200,y:-200,z:1750},{x:450,y:-200,z:1750}],[{x:200,y:150,z:1500},{x:200,y:150,z:1750},{x:200,y:-200,z:1750}],[{x:200,y:150,z:1500},{x:200,y:-200,z:1500},{x:200,y:-200,z:1750}],[{x:200,y:-200,z:1500},{x:200,y:-200,z:1750},{x:450,y:-200,z:1750}],[{x:450,y:-200,z:1750},{x:450,y:-200,z:1500},{x:200,y:-200,z:1500}],[{x:450,y:150,z:1500},{x:200,y:150,z:1500},{x:200,y:150,z:1750}],[{x:450,y:150,z:1500},{x:450,y:150,z:1750},{x:200,y:150,z:1750}],[{x:-200,y:-200,z:1500},{x:-450,y:-200,z:1500},{x:-450,y:150,z:1500}],[{x:-200,y:-200,z:1500},{x:-200,y:150,z:1500},{x:-450,y:150,z:1500}],[{x:-200,y:150,z:1750},{x:-200,y:-200,z:1750},{x:-200,y:-200,z:1500}],[{x:-200,y:150,z:1750},{x:-200,y:150,z:1500},{x:-200,y:-200,z:1500}],[{x:-200,y:-200,z:1750},{x:-200,y:150,z:1750},{x:-450,y:150,z:1750}],[{x:-450,y:150,z:1750},{x:-450,y:-200,z:1750},{x:-200,y:-200,z:1750}],[{x:-450,y:150,z:1500},{x:-450,y:150,z:1750},{x:-450,y:-200,z:1750}],[{x:-450,y:150,z:1500},{x:-450,y:-200,z:1500},{x:-450,y:-200,z:1750}],[{x:-450,y:-200,z:1500},{x:-450,y:-200,z:1750},{x:-200,y:-200,z:1750}],[{x:-200,y:-200,z:1750},{x:-200,y:-200,z:1500},{x:-450,y:-200,z:1500}],[{x:-200,y:150,z:1500},{x:-450,y:150,z:1500},{x:-450,y:150,z:1750}],[{x:-200,y:150,z:1500},{x:-200,y:150,z:1750},{x:-450,y:150,z:1750}]]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.values={translate:300,rotate:.1,zoom:100},e.focalLength={value:600,zoomOut:!0}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.Triangle=function t(e,a,i){n(this,t),this.a=e,this.b=a,this.c=i}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.Node=function t(e){n(this,t),this.nodeLeft=null,this.nodeRight=null,this.triangle=e}},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();n(15);var r=n(12),o=n(3),s=n(11),u=n(13),c=n(4),l=n(9),y=n(2);e.App=function(){function t(){a(this,t);var e=new r.ScenesObjects(o.POINTS_3D);this.alg=new l.PaintersAlgorithm(e),this.transformation=new u.Transformation(e),this.canvas=document.querySelector("canvas"),this.scene=new s.Scene(e,this.canvas)}return i(t,[{key:"bindKeys",value:function(){var t=this;document.addEventListener("keydown",function(e){if(!e.target.classList.contains("transformation-value")){switch(e.keyCode){case 37:t.transformation.rotate(o.AXIS.Y,c.values.rotate);break;case 38:t.transformation.rotate(o.AXIS.X,-c.values.rotate);break;case 39:t.transformation.rotate(o.AXIS.Y,-c.values.rotate);break;case 40:t.transformation.rotate(o.AXIS.X,c.values.rotate);break;case 86:t.transformation.rotate(o.AXIS.Z,-c.values.rotate);break;case 67:t.transformation.rotate(o.AXIS.Z,c.values.rotate);break;case 81:t.transformation.translate(o.AXIS.Y,-c.values.translate);break;case 69:t.transformation.translate(o.AXIS.Y,c.values.translate);break;case 87:t.transformation.translate(o.AXIS.Z,-c.values.translate);break;case 83:t.transformation.translate(o.AXIS.Z,c.values.translate);break;case 65:t.transformation.translate(o.AXIS.X,c.values.translate);break;case 68:t.transformation.translate(o.AXIS.X,-c.values.translate);break;case 109:t.transformation.zoom(o.ZOOM.OUT,c.values.zoom);break;case 107:t.transformation.zoom(o.ZOOM.IN,c.values.zoom)}t.run()}},!1)}},{key:"bindInputs",value:function(){var t=this,e=document.querySelectorAll(".transformation-value"),n=function(e){var n=e.target,a=function(){var t=n.parentNode.children[2];t.style.display=(0,y.isNumeric)(n.value)?"none":"block"};(0,y.isNumeric)(n.value)&&t.updateValues(n.id,+n.value),a()};[].forEach.call(e,function(t){t.addEventListener("keyup",n,!1)})}},{key:"updateValues",value:function(t,e){switch(t){case"translate-value":c.values.translate=e;break;case"rotate-value":c.values.rotate=e;break;case"zoom-value":c.values.zoom=e}}},{key:"onVirtualKeyClick",value:function(t){var e=t.getAttribute("data-action").split("-"),n=e[0],a=e[1],i=e[2],r=function(){return"X"===i?o.AXIS.X:"Y"===i?o.AXIS.Y:o.AXIS.Z},s=function(){return"pos"===a?c.values.rotate:-c.values.rotate},u=function(){return"pos"===a?c.values.translate:-c.values.translate},l=function(){return"in"===a?o.ZOOM.IN:o.ZOOM.OUT};switch(n){case"rotate":this.transformation.rotate(r(),s());break;case"translate":this.transformation.translate(r(),u());break;case"zoom":this.transformation.zoom(l(),c.values.zoom)}this.run()}},{key:"onMinBtnClick",value:function(t){var e=t.parentNode.children[1],n="-"===t.textContent;n?(e.style.display="none",t.textContent="+"):(e.style.display="block",t.textContent="-")}},{key:"bindControlElems",value:function(){var t=this,e=function(e){var n=e.target;n.classList.contains("control-item")?t.onVirtualKeyClick(n):n.classList.contains("minimize-btn")&&t.onMinBtnClick(n)};document.addEventListener("click",e,!1)}},{key:"setCanvas",value:function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}},{key:"bindEvents",value:function(){this.bindKeys(),this.bindControlElems(),this.bindResize(),this.bindInputs()}},{key:"bindResize",value:function(){var t=this,e=function(){t.setCanvas(),t.run()};window.addEventListener("resize",(0,y.debounce)(e,250))}},{key:"setInputsValues",value:function(){document.querySelector("#translate-value").value=c.values.translate,document.querySelector("#rotate-value").value=c.values.rotate,document.querySelector("#zoom-value").value=c.values.zoom}},{key:"init",value:function(){this.setCanvas(),this.setInputsValues(),this.bindEvents(),this.run()}},{key:"run",value:function(){this.alg.compute(),this.scene.make2DProjection(),this.scene.paint()}}]),t}()},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.BSPTree=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(6),o=(n(5),n(2)),s=n(1);e.BSPTree=function(){function t(){a(this,t),this.viewerPoint=new s.Point3D(0,0,0)}return i(t,[{key:"add",value:function(t,e){var n=(0,o.getPointPositionRelativeToPlane)(t.triangle,e.a),a=(0,o.getPointPositionRelativeToPlane)(t.triangle,e.b),i=(0,o.getPointPositionRelativeToPlane)(t.triangle,e.c);n<=0&&a<=0&&i<=0?null!==t.nodeLeft?this.add(t.nodeLeft,e):t.nodeLeft=new r.Node(e):null!==t.nodeRight?this.add(t.nodeRight,e):t.nodeRight=new r.Node(e)}},{key:"getTrianglesByDepth",value:function(t,e){if(null!==t){var n=(0,o.getPointPositionRelativeToPlane)(t.triangle,this.viewerPoint);n<=0?(this.getTrianglesByDepth(t.nodeRight,e),e.push(t.triangle),this.getTrianglesByDepth(t.nodeLeft,e)):(this.getTrianglesByDepth(t.nodeLeft,e),e.push(t.triangle),this.getTrianglesByDepth(t.nodeRight,e))}}}]),t}()},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.PaintersAlgorithm=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(8),o=n(6);n(1),e.PaintersAlgorithm=function(){function t(e){a(this,t),this.scenesObjects=e}return i(t,[{key:"compute",value:function(){this.scenesObjects.clear();for(var t=new r.BSPTree,e=new o.Node(this.scenesObjects.triangles3D[0]),n=1;n<this.scenesObjects.triangles3D.length;n++)t.add(e,this.scenesObjects.triangles3D[n]);t.getTrianglesByDepth(e,this.scenesObjects.sortedTriangles)}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.Point2D=function t(e,a){n(this,t),this.x=e,this.y=a}},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Scene=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(4),o=n(10),s=n(5),u=n(2);e.Scene=function(){function t(e,n){a(this,t),this.canvas=n,this.scenesObjects=e,this.ctx=this.canvas.getContext("2d")}return i(t,[{key:"to2DPoint",value:function(t){var e=r.focalLength.value/t.z,n=e*t.x+this.canvas.width/2,a=this.canvas.height/2-e*t.y;return new o.Point2D(n,a)}},{key:"make2DProjection",value:function(){var t=this;this.scenesObjects.sortedTriangles.forEach(function(e){(0,u.isVisible)(e.a)&&(0,u.isVisible)(e.b)&&(0,u.isVisible)(e.c)&&t.scenesObjects.add2DTriangle(new s.Triangle(t.to2DPoint(e.a),t.to2DPoint(e.b),t.to2DPoint(e.c)))})}},{key:"paint",value:function(){var t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.scenesObjects.triangles2D.forEach(function(e){t.ctx.fillStyle="rgb(16,108,200)",t.ctx.strokeStyle="#000",t.ctx.beginPath(),t.ctx.moveTo(Math.round(e.a.x),Math.round(e.a.y)),t.ctx.lineTo(Math.round(e.b.x),Math.round(e.b.y)),t.ctx.lineTo(Math.round(e.c.x),Math.round(e.c.y)),t.ctx.stroke(),t.ctx.fill(),t.ctx.closePath()})}}]),t}()},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.ScenesObjects=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(1),o=n(5);e.ScenesObjects=function(){function t(e){a(this,t),this.triangles3D=[],this.triangles2D=[],this.sortedTriangles=[],this.create3DTriangles(e)}return i(t,[{key:"create3DTriangles",value:function(t){for(var e=0;e<t.length;e++){var n=new r.Point3D(t[e][0].x,t[e][0].y,t[e][0].z),a=new r.Point3D(t[e][1].x,t[e][1].y,t[e][1].z),i=new r.Point3D(t[e][2].x,t[e][2].y,t[e][2].z);this.triangles3D.push(new o.Triangle(n,a,i))}}},{key:"add2DTriangle",value:function(t){this.triangles2D.push(t)}},{key:"clear",value:function(){this.triangles2D=[],this.sortedTriangles=[]}}]),t}()},function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Transformation=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=n(14),o=n(3),s=n(4),u=n(2);e.Transformation=function(){function t(e){a(this,t),this.scenesObjects=e,this.matrix=new r.TransformationMatrix}return i(t,[{key:"updateTriangles",value:function(t){this.scenesObjects.triangles3D.forEach(function(e){var n=(0,u.multiplyMatrixByVector)(t,(0,u.createVector)(e.a));e.a.updatePoint(n),n=(0,u.multiplyMatrixByVector)(t,(0,u.createVector)(e.b)),e.b.updatePoint(n),n=(0,u.multiplyMatrixByVector)(t,(0,u.createVector)(e.c)),e.c.updatePoint(n)})}},{key:"rotate",value:function(t,e){var n=void 0;switch(t){case o.AXIS.X:n=this.matrix.getRotXMatrix(e),this.updateTriangles(n);break;case o.AXIS.Y:n=this.matrix.getRotYMatrix(e),this.updateTriangles(n);break;case o.AXIS.Z:n=this.matrix.getRotZMatrix(e),this.updateTriangles(n)}}},{key:"translate",value:function(t,e){var n=void 0;switch(t){case o.AXIS.X:n=this.matrix.getTransMatrix(e,0,0),this.updateTriangles(n);break;case o.AXIS.Y:n=this.matrix.getTransMatrix(0,e,0),this.updateTriangles(n);break;case o.AXIS.Z:n=this.matrix.getTransMatrix(0,0,e),this.updateTriangles(n)}}},{key:"zoom",value:function(t,e){switch(t){case o.ZOOM.IN:s.focalLength.value+=e,s.focalLength.zoomOut=!0;break;case o.ZOOM.OUT:var n=s.focalLength.value-e;n<0?s.focalLength.zoomOut=!1:s.focalLength.value=n}}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),i=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];e.TransformationMatrix=function(){function t(){n(this,t)}return a(t,[{key:"getTransMatrix",value:function(t,e,n){var a=i.map(function(t){return t.slice(0)});return a[0][3]=t,a[1][3]=e,a[2][3]=n,a}},{key:"getRotXMatrix",value:function(t){var e=i.map(function(t){return t.slice(0)});return e[1][1]=Math.cos(t),e[1][2]=-Math.sin(t),e[2][1]=Math.sin(t),e[2][2]=Math.cos(t),e}},{key:"getRotYMatrix",value:function(t){var e=i.map(function(t){return t.slice(0)});return e[0][0]=Math.cos(t),e[0][2]=Math.sin(t),e[2][0]=-Math.sin(t),e[2][2]=Math.cos(t),e}},{key:"getRotZMatrix",value:function(t){var e=i.map(function(t){return t.slice(0)});return e[0][0]=Math.cos(t),e[0][1]=-Math.sin(t),e[1][0]=Math.sin(t),e[1][1]=Math.cos(t),e}}]),t}()},function(t,e){}]);
//# sourceMappingURL=main.d471409c7329215dc979.bundle.map