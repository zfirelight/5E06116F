function myFunction() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/d57871c1-8581-4f36-9d5f-7753f7d3fd90/files/get/10142021%20(1).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/f4d538e1-15a9-4b67-96b8-cb131b991cbf/files/get/10142021%20(2).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/2e38457c-4a85-4e37-ba02-28ab295b7399/files/get/10142021%20(3).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/10106bdf-82a9-4e6b-8f6b-5918b2e8fa0e/files/get/10142021%20(4).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}