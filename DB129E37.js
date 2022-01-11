function myFunction() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/6f0f2b5a-b56b-4899-9ebd-0f7f53c9fc9c/files/get/01102022%20(1).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/d021e9ad-b2b5-49a8-a954-f05d363a47a0/files/get/01102022%20(2).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/55f5ba9e-9599-43da-89ef-032ebd4846fb/files/get/01102022%20(3).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/36a24340-e4a2-464d-a9a4-e0ab295420f8/files/get/01102022%20(4).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}