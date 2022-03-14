function myFunction() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/43c1d66a-2781-4141-498b-3c05ebf85a90/files/get/03132022%20(1).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/17408197-aa3f-4424-7f74-c8b7349ce311/files/get/03132022%20(2).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/8c8f8351-becf-4a49-5dc3-cfa56c917b94/files/get/03132022%20(3).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/c7ffcb78-6aa5-46fe-54b6-7229689e6f4b/files/get/03132022%20(4).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}