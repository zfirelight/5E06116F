function myFunction() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/799261bd-d199-49af-4bff-7272583cd1f4/files/get/03092022%20(1).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/1122663a-bc8d-4046-5acd-c4a287a8c4c8/files/get/03092022%20(2).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/a79909ba-72a8-4de7-6c4f-e36f39f0e143/files/get/03092022%20(3).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/e2902e73-fe04-4520-7f60-c68603f06bfa/files/get/03092022%20(4).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}