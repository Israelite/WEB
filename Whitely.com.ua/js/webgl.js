/**
 * Created by Miki on 12.12.2015.
 */
var renderer,scene,camera,mesh;

function initiate(){
     var canvas=document.getElementById('canvas');
     var width = canvas.width;
     var height = canvas.height;

      renderer = new THREE.WebGLRenderer({canvas:canvas});
      renderer.setClearColor(0xFFFFFF);

     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera(45,width/height,0.1,1000);
     camera.position.set(0,0,150);

    var materials = [
        new THREE.MeshPhongMaterial({map:THREE.ImageUtils.loadTexture('images/gold.png')}),
        new THREE.MeshPhongMaterial({map:THREE.ImageUtils.loadTexture('images/gold.png')}),
        new THREE.MeshPhongMaterial({map:THREE.ImageUtils.loadTexture('images/gold.png')}),
        new THREE.MeshPhongMaterial({map:THREE.ImageUtils.loadTexture('images/silver.png')}),
        new THREE.MeshPhongMaterial({map:THREE.ImageUtils.loadTexture('images/silver.png')}),
        new THREE.MeshPhongMaterial({map:THREE.ImageUtils.loadTexture('images/silver.png')}),
    ];

     var geometry = new THREE.CubeGeometry(50,50,50,1,1,1);
    /* var material = new THREE.MeshBasicMaterial({color: 0x000000,wireframe:true});*/

     mesh = new THREE.Mesh(geometry,new THREE.MeshFaceMaterial(materials));
     scene.add(mesh);

    mesh.rotation.set(10,10,0);

    var light=new THREE.SpotLight(0xFFFFFF);
    light.position.set(50,150,150);
    scene.add(light);

   /* renderer.render(scene,camera);*/

    canvas.addEventListener('mousemove',move);
  /*  canvas.addEventListener('')*/

}

function move(e){

    mesh.rotation.x= e.pageY*0.01;
    mesh.rotation.z= -e.pageX*0.01;
    renderer.render(scene,camera);
}

addEventListener('load',initiate);


