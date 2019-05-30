(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(46)},36:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),i=n.n(r),l=(n(36),n(8)),c=n(6),u=function(){return o.a.createElement("section",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.b,{to:"/cube-example"},"Cube Example"))))},s=n(9),m=n(10),f=n(12),h=n(11),p=n(13),v=(n(45),function(e,t,n){var a=e.createShader(t);if(e.shaderSource(a,n),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){var o="An error occurred compiling the shaders: "+e.getShaderInfoLog(a);throw e.deleteShader(a),new Error(o)}return a}),E=function(e){var t=v(e,e.VERTEX_SHADER,"\n    attribute vec4 aVertexPosition;\n    attribute vec4 aVertexColor;\n\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n\n    varying lowp vec4 vColor;\n\n    void main(void) {\n      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n      vColor = aVertexColor;\n    }\n  "),n=v(e,e.FRAGMENT_SHADER,"\n    varying lowp vec4 vColor;\n\n    void main(void) {\n      gl_FragColor = vColor;\n    }\n  "),a=e.createProgram();if(e.attachShader(a,t),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw new Error("Unable to initialize the shader program: "+e.getProgramInfoLog(a));return a},d=function(e){var t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t);e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]),e.STATIC_DRAW);for(var n=[[.5,.5,.5,1],[1,0,0,1],[0,1,0,1],[0,0,1,1],[1,1,0,1],[1,0,1,1]],a=[],o=0;o<n.length;++o){var r=n[o];a=a.concat(r,r,r,r)}var i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(a),e.STATIC_DRAW);var l=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l);return e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),e.STATIC_DRAW),{position:t,color:i,indices:l}},g=n(5),b=function(e,t,n,a,o,r){e.clearColor(1,1,1,1),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);var i=45*Math.PI/180,l=e.canvas.clientWidth/e.canvas.clientHeight,c=g.a.create();g.a.perspective(c,i,l,.1,100);var u=g.a.create();g.a.translate(u,u,[-0,0,-6]),g.a.rotate(u,u,a,[1,0,0]),g.a.rotate(u,u,o,[0,1,0]),g.a.rotate(u,u,r,[0,0,1]);var s=e.FLOAT;e.bindBuffer(e.ARRAY_BUFFER,n.position),e.vertexAttribPointer(t.attribLocations.vertexPosition,3,s,!1,0,0),e.enableVertexAttribArray(t.attribLocations.vertexPosition);var m=e.FLOAT;e.bindBuffer(e.ARRAY_BUFFER,n.color),e.vertexAttribPointer(t.attribLocations.vertexColor,4,m,!1,0,0),e.enableVertexAttribArray(t.attribLocations.vertexColor),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.indices),e.useProgram(t.program),e.uniformMatrix4fv(t.uniformLocations.projectionMatrix,!1,c),e.uniformMatrix4fv(t.uniformLocations.modelViewMatrix,!1,u);var f=e.UNSIGNED_SHORT;e.drawElements(e.TRIANGLES,36,f,0)},A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).renderCanvas=function(){var e=n.props,t=e.rotationX,a=e.rotationY,o=e.rotationZ;b(n.gl,n.programInfo,n.buffers,t,a,o)},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.gl=function(e){var t=e.getContext("webgl");if(t)return t;alert("Incapaz de inicializar o WebGL.Seu navegador ou sua m\xe1quina n\xe3o suporta.")}(this.canvas),this.gl&&(this.programInfo=function(e){var t=E(e);return{program:t,attribLocations:{vertexPosition:e.getAttribLocation(t,"aVertexPosition"),vertexColor:e.getAttribLocation(t,"aVertexColor")},uniformLocations:{projectionMatrix:e.getUniformLocation(t,"uProjectionMatrix"),modelViewMatrix:e.getUniformLocation(t,"uModelViewMatrix")}}}(this.gl),this.buffers=d(this.gl),requestAnimationFrame(this.renderCanvas))}},{key:"componentDidUpdate",value:function(e){if(this.gl){(function(e,t,n){return!!n.find(function(n){return e[n]!==t})})(this.props,e,["rotationX","rotationY","rotationZ"])&&requestAnimationFrame(this.renderCanvas)}}},{key:"render",value:function(){var e=this;return o.a.createElement("canvas",{ref:function(t){return e.canvas=t},width:"640",height:"480"})}}]),t}(a.Component),x=function(e){return e/800},R=function(e){return{x:e.clientX,y:e.clientY}},w=function(e){return{x:e.clientX,y:e.clientY}},M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={rotationX:0,rotationY:.7,rotationZ:1,pos:null},n.onTouchStart=function(e){n.setState({pos:R(e.touches[0])})},n.onTouchMove=function(e){e.changedTouches&&e.changedTouches.length&&n.onUpdatePos(R(e.changedTouches[0]))},n.onTouchEnd=function(e){n.setState({pos:null})},n.onMouseDown=function(e){n.setState({pos:w(e)})},n.onMouseMove=function(e){n.onUpdatePos(w(e))},n.onMouseUp=function(e){console.log(e),n.setState({pos:null})},n.onMouseOut=function(e){n.setState({pos:null})},n.onUpdatePos=function(e){return n.setState(function(t){var a=n.state,o=a.pos,r=a.rotationX,i=a.rotationY;return o?{rotationX:r+-x(o.x-e.x),rotationY:i+-x(o.y-e.y),pos:e}:t})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.rotationX,a=t.rotationY,r=t.rotationZ;return o.a.createElement("div",{className:"page"},o.a.createElement("h1",null,"Cube Example"),o.a.createElement("div",{className:"containerCanvas",onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp,onMouseOut:this.onMouseOut},">",o.a.createElement(A,{rotationX:n,rotationY:a,rotationZ:r})),o.a.createElement("p",null,o.a.createElement("span",null,"Rotation X in radians: "),o.a.createElement("input",{type:"number",step:.01,value:n,onChange:function(t){return e.setState({rotationX:t.target.value})}})),o.a.createElement("p",null,o.a.createElement("span",null,"Rotation Y in radians: "),o.a.createElement("input",{type:"number",step:.01,value:a,onChange:function(t){return e.setState({rotationY:t.target.value})}})),o.a.createElement("p",null,o.a.createElement("span",null,"Rotation Z in radians: "),o.a.createElement("input",{type:"number",step:.01,value:r,onChange:function(t){return e.setState({rotationZ:t.target.value})}})),o.a.createElement("p",null,"Source Code:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/pethersonmoreno/webgl-analytical-geometry/tree/feature/first-webgl-with-react/src/pages/CubeExample"},"CubeExample"))),o.a.createElement("p",null,"Done based on:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://mdn.github.io/webgl-examples/tutorial/sample5/index.html"},"Sample 5 of webgl-examples")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample5"},"Source Code of Sample 5 of webgl-examples"))))}}]),t}(a.Component),S=function(){return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(c.a,{path:"/",exact:!0,component:u}),o.a.createElement(c.a,{path:"/cube-example",component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.8478c13b.chunk.js.map